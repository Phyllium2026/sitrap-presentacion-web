const kpis = [
  "Stock General Actual",
  "Lotes Registrados",
  "Entradas VMA",
  "Despachos EECC",
];

const movimientos = [
  "Traslados",
  "Recepciones",
  "Despachos",
  "Devoluciones",
  "Bajas",
];

function LogoBar() {
  return (
    <div className="logoBar">
      <img src="/logo-mlp.png" alt="MLP" />
      <img src="/logo-phyllium.png" alt="Phyllium" />
      <img src="/logo-tripan.png" alt="Tripan" />
    </div>
  );
}

function Slide({
  number,
  eyebrow,
  title,
  text,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section className="slide">
      <div className="slideHeader">
        <span>{number}</span>
        <p>{eyebrow}</p>
      </div>

      <div className="slideGrid">
        <div className="slideText">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="cover">
        <LogoBar />

        <div className="coverGrid">
          <div>
            <img className="sitrapLogo" src="/logo-sitrap.png" alt="SITRAP" />
            <p className="tag">Presentación Ejecutiva · Junio 2026</p>
            <h1>SITRAP</h1>
            <h3>Sistema de Inventario y Trazabilidad de Plantas</h3>
            <p className="coverText">
              Plataforma digital para control operacional, inventario vivo y
              trazabilidad desde vivero hasta terreno.
            </p>
          </div>

          <div className="coverCard">
            <img src="/dashboard-sitrap.png" alt="Dashboard SITRAP" />
          </div>
        </div>
      </section>

      <Slide
        number="01"
        eyebrow="Desafío operacional"
        title="Del registro disperso al control trazable"
        text="Antes de SITRAP, la información de lotes, movimientos y despachos se encontraba fragmentada en múltiples registros, dificultando la toma de decisiones y la trazabilidad operativa."
      >
        <img className="mainImage" src="/infograma-sitrap.png" alt="Arquitectura SITRAP" />
        <div className="pillGrid">
          <span>Inventario</span>
          <span>Trazabilidad</span>
          <span>Movimientos</span>
          <span>Reportabilidad</span>
        </div>
      </Slide>

      <Slide
        number="02"
        eyebrow="Dashboard ejecutivo"
        title="Control operacional en tiempo real"
        text="SITRAP integra indicadores estratégicos y operacionales para apoyar la gestión de viveros, contratos, stock y movimientos críticos."
      >
        <div className="imageWithSide">
          <img src="/dashboard-sitrap.png" alt="Dashboard SITRAP" />
          <div className="sideKpis">
            {kpis.map((kpi) => (
              <span key={kpi}>{kpi}</span>
            ))}
          </div>
        </div>
      </Slide>

      <Slide
        number="03"
        eyebrow="Registro E1"
        title="Codificación inteligente de lotes"
        text="Cada lote incorpora identidad única y trazabilidad histórica mediante reglas estandarizadas para producción nueva y regularización de lotes existentes."
      >
        <img className="mainImage vertical" src="/e1-formulario-lotes.png" alt="Formulario E1" />
        <div className="process">
          <span>Registro</span>
          <span>Codificación</span>
          <span>QR</span>
          <span>Inventario</span>
        </div>
      </Slide>

      <Slide
        number="04"
        eyebrow="Movimientos E2"
        title="Trazabilidad completa del ciclo operacional"
        text="Cada traslado, recepción, despacho, devolución o baja queda registrado y vinculado al historial del lote."
      >
        <div className="imageWithSide">
          <img src="/e2-registro-movimientos.png" alt="Formulario E2" />
          <div className="sideKpis">
            {movimientos.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </Slide>

      <Slide
        number="05"
        eyebrow="Consulta de lotes"
        title="Información disponible en terreno"
        text="Las fichas permiten revisar datos esenciales, historial técnico y trazabilidad de cada lote desde dispositivos móviles."
      >
        <div className="twoImages">
          <img src="/ficha-rapida-lote.png" alt="Ficha rápida" />
          <img src="/ficha-completa-lote.png" alt="Ficha completa" />
        </div>
      </Slide>

      <Slide
        number="06"
        eyebrow="Identidad digital"
        title="Identificación física y digital"
        text="Cada bandeja puede ser identificada y consultada mediante código QR, conectando el lote físico con su información digital."
      >
        <div className="twoImages">
          <img src="/qr-lote-sitrap.png" alt="QR lote" />
          <img src="/ficha-lote-qr.png" alt="Ficha QR" />
        </div>
      </Slide>

      <Slide
        number="07"
        eyebrow="Despacho"
        title="Despacho trazable hasta destino"
        text="Los despachos generan respaldo documental automático, asegurando continuidad entre vivero, transporte y recepción en terreno."
      >
        <div className="twoImages">
          <img src="/ticket-despacho-sitrap.png" alt="Ticket despacho" />
          <img src="/ticket-termico-58mm.png" alt="Ticket térmico" />
        </div>
      </Slide>

      <section className="closing">
        <img src="/logo-sitrap-icon.png" alt="SITRAP icon" />
        <h2>Valor estratégico para Minera Los Pelambres</h2>
        <p>
          De la producción a la restauración: información confiable,
          trazable y oportuna para decisiones operacionales.
        </p>

        <div className="benefits">
          <span>Trazabilidad vivero-terreno</span>
          <span>Información en tiempo real</span>
          <span>Reducción de errores manuales</span>
          <span>Control por contratos</span>
          <span>Respaldo documental</span>
          <span>Escalable a otros programas</span>
        </div>
      </section>
    </main>
  );
}
