import { useState } from "react";

function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #050816 0%, #090b1f 50%, #111827 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {!started ? (
        <div
          style={{
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              margin: "0 auto 25px",
              background:
                "radial-gradient(circle, #7c3aed 0%, #4f46e5 60%, transparent 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              boxShadow: "0 0 40px #7c3aed",
            }}
          >
            🔥
          </div>

          <h1
            style={{
              fontSize: "42px",
              marginBottom: "15px",
            }}
          >
            FINIX AI
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Wujudkan impianmu, tuangkan idemu,
            dan kembangkan kemampuanmu
            bersama FINIX AI.
          </p>

          <button
            onClick={() => setStarted(true)}
            style={{
              padding: "15px 40px",
              border: "none",
              borderRadius: "12px",
              background: "#7c3aed",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Mulai
          </button>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "38px",
              marginBottom: "20px",
            }}
          >
            Selamat Datang 👋
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "30px",
              lineHeight: "1.8",
            }}
          >
            Ini adalah awal perjalanan FINIX AI.
            Setelah ini kita akan membuat
            Cosmic Portal, Landing Page,
            Login, Dashboard,
            dan seluruh fitur AI.
          </p>

          <button
            onClick={() => setStarted(false)}
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "10px",
              background: "#374151",
              color: "white",
              cursor: "pointer",
            }}
          >
            Kembali
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
