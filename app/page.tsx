export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px"
          }}
        >
          SITRAP
        </h1>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: 300,
            marginBottom: "30px"
          }}
        >
          Sistema de Inventario y Trazabilidad de Plantas
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          Presentación Ejecutiva para Minera Los Pelambres
        </p>

        <p
          style={{
            marginTop: "40px",
            opacity: 0.8
          }}
        >
          Phyllium Consultores · Tripan · Minera Los Pelambres
        </p>
      </div>
    </main>
  );
}
