export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07152e",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "8px",
          background:
            "linear-gradient(90deg,#00d084,#00b4d8,#0077b6,#023e8a)",
        }}
      />

      <p
        style={{
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#7dd3fc",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        Minera Los Pelambres · Phyllium Consultores · Tripan
      </p>

      <h1
        style={{
          fontSize: "72px",
          margin: 0,
          fontWeight: 700,
        }}
      >
        SITRAP
      </h1>

      <h2
        style={{
          fontSize: "32px",
          marginTop: "20px",
          fontWeight: 300,
          maxWidth: "900px",
        }}
      >
        Sistema de Inventario y Trazabilidad de Plantas
      </h2>

      <div
        style={{
          width: "120px",
          height: "3px",
          background: "#00d084",
          marginTop: "35px",
          marginBottom: "35px",
        }}
      />

      <p
        style={{
          fontSize: "22px",
          maxWidth: "900px",
          lineHeight: 1.8,
          color: "#dbeafe",
        }}
      >
        Plataforma digital para el control, trazabilidad,
        inventario y seguimiento operacional de plantas
        desde vivero hasta terreno.
      </p>

      <div
        style={{
          marginTop: "60px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #1e3a5f",
            padding: "20px",
            minWidth: "220px",
            borderRadius: "10px",
          }}
        >
          Inventario
        </div>

        <div
          style={{
            border: "1px solid #1e3a5f",
            padding: "20px",
            minWidth: "220px",
            borderRadius: "10px",
          }}
        >
          Trazabilidad
        </div>

        <div
          style={{
            border: "1px solid #1e3a5f",
            padding: "20px",
            minWidth: "220px",
            borderRadius: "10px",
          }}
        >
          Dashboard
        </div>

        <div
          style={{
            border: "1px solid #1e3a5f",
            padding: "20px",
            minWidth: "220px",
            borderRadius: "10px",
          }}
        >
          Reportabilidad
        </div>
      </div>

      <p
        style={{
          marginTop: "80px",
          fontSize: "14px",
          color: "#94a3b8",
        }}
      >
        Presentación Ejecutiva · Junio 2026
      </p>
    </main>
  );
}
