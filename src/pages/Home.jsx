import { useState, useEffect } from "react";

function Home() {
  const [started, setStarted] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [];

    for (let i = 0; i < 80; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }

    setStars(generatedStars);
  }, []);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .home{
          width:100%;
          min-height:100vh;
          overflow:hidden;
          position:relative;
          display:flex;
          justify-content:center;
          align-items:center;
          background:
          radial-gradient(circle at top,#34206d 0%,#120824 40%,#050816 100%);
        }

        .stars{
          position:absolute;
          inset:0;
          overflow:hidden;
        }

        .star{
          position:absolute;
          background:white;
          border-radius:50%;
          animation:twinkle linear infinite;
        }

        @keyframes twinkle{
          0%{
            opacity:.2;
            transform:scale(.5);
          }

          50%{
            opacity:1;
            transform:scale(1.4);
          }

          100%{
            opacity:.2;
            transform:scale(.5);
          }
        }

        .portal{
          width:240px;
          height:240px;
          border-radius:50%;
          background:
          radial-gradient(circle,#7c3aed 0%,#4338ca 45%,transparent 75%);
          box-shadow:
          0 0 20px #7c3aed,
          0 0 60px #7c3aed,
          0 0 120px #4f46e5;
          animation:portal 5s linear infinite;
          display:flex;
          justify-content:center;
          align-items:center;
          margin:auto;
        }

        @keyframes portal{
          0%{
            transform:rotate(0deg);
          }

          100%{
            transform:rotate(360deg);
          }
        }

        .phoenix{
          font-size:72px;
          animation:fly 2.5s ease-in-out infinite;
          user-select:none;
        }

        @keyframes fly{
          0%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-15px);
          }

          100%{
            transform:translateY(0px);
          }
        }

        .content{
          position:relative;
          z-index:5;
          width:100%;
          max-width:700px;
          padding:30px;
          text-align:center;
        }

        h1{
          margin-top:35px;
          font-size:56px;
          color:white;
          letter-spacing:2px;
        }

        .subtitle{
          margin-top:18px;
          color:#d1d5db;
          line-height:1.8;
          font-size:18px;
        }

        .buttonGroup{
          display:flex;
          gap:18px;
          justify-content:center;
          flex-wrap:wrap;
          margin-top:45px;
        }

        button{
          border:none;
          cursor:pointer;
          transition:.35s;
          font-size:16px;
          font-weight:bold;
          border-radius:14px;
          padding:15px 34px;
        }

        .primary{
          background:#7c3aed;
          color:white;
          box-shadow:0 0 25px #7c3aed;
        }

        .primary:hover{
          transform:translateY(-3px);
          background:#6d28d9;
        }

        .secondary{
          background:transparent;
          border:2px solid #7c3aed;
          color:white;
        }

        .secondary:hover{
          background:#7c3aed;
        }

        .welcome{
          color:white;
          animation:fade .6s;
        }

        @keyframes fade{
          from{
            opacity:0;
            transform:translateY(25px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .welcome h2{
          font-size:42px;
          margin-bottom:20px;
        }

        .welcome p{
          color:#d1d5db;
          line-height:1.8;
          font-size:18px;
          margin-bottom:35px;
        }

        @media(max-width:700px){

          h1{
            font-size:38px;
          }

          .portal{
            width:180px;
            height:180px;
          }

          .phoenix{
            font-size:58px;
          }

          .subtitle{
            font-size:16px;
          }

          button{
            width:100%;
          }

          .buttonGroup{
            flex-direction:column;
          }
        }
      `}</style>

      <div className="home">
        <div className="stars">
          {stars.map((star)=>(
            <div
              key={star.id}
              className="star"
              style={{
                left:`${star.left}%`,
                top:`${star.top}%`,
                width:`${star.size}px`,
                height:`${star.size}px`,
                animationDelay:`${star.delay}s`,
                animationDuration:`${star.duration}s`
              }}
            />
          ))}
        </div>
                <div className="content">

          {!started ? (
            <>

              <div className="portal">
                <div className="phoenix">🔥</div>
              </div>

              <h1>FINIX AI</h1>

              <p className="subtitle">
                Wujudkan impianmu, tuangkan idemu,
                bangun kreativitasmu, dan selesaikan
                berbagai pekerjaan lebih cepat bersama
                FINIX AI.
              </p>

              <div className="buttonGroup">

                <button
                  className="primary"
                  onClick={() => setStarted(true)}
                >
                  Mulai Sekarang
                </button>

                <button className="secondary">
                  Pelajari
                </button>

              </div>

            </>
          ) : (

            <div className="welcome">

              <h2>Selamat Datang di FINIX AI 🚀</h2>

              <p>
                Ini adalah versi awal FINIX AI.
                Nantinya halaman ini akan berkembang
                menjadi Cosmic Portal, Landing Page,
                Login, Dashboard, Phoenix Awakening,
                serta berbagai AI yang saling
                terhubung dalam satu platform.
              </p>

              <div className="buttonGroup">

                <button
                  className="primary"
                  onClick={() => setStarted(false)}
                >
                  Kembali
                </button>

                <button className="secondary">
                  Lanjut
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </>
  );
}

export default Home;
