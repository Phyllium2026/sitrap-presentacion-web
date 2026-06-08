const logos = [
  "/logo-mlp.png",
  "/logo-phyllium.png",
  "/logo-tripan.png",
];

function Section({
  eyebrow,
  title,
  text,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="text">{text}</p>
        {children}
      </div>

      {image && (
        <div className="imageCard">
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="topbar">
        <img src="/logo-sitrap.png" className="logoSitrap" />
        <div className="logos">
          {logos.map((logo) => (
            <img key={logo} src={logo} />
          ))}
        </div>
      </nav>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Presentación Ejecutiva · Junio 2026</p>
          <h1>SITRAP</h1>
          <h3>Sistema de Inventario y Trazabilidad de Plantas</h3>
          <p>
            Plataforma digital para control operacional, inventario vivo,
            trazabilidad, QR, tickets de despacho y reportabilidad ejecutiva.
          </p>
        </div>
      </section>

      <Section
        eyebrow="01 · Desafío operacional"
        title="Del registro disperso al control trazable"
        text="SITRAP responde a la necesidad de ordenar información crítica de viveros, lotes, movimientos, despachos y stock en una única plataforma confiable, auditable y disponible en terreno."
      >
        <div className="grid4">
          <span>Inventario vivo</span>
          <span>QR por lote</span>
          <span>Movimientos</span>
          <span>Reportabilidad</span>
        </div>
      </Section>

      <Section
        eyebrow="02 · Dashboard ejecutivo"
        title="Control en tiempo real"
        text="El dashboard consolida KPIs estratégicos, stock por vivero, especies, alertas, contratos y movimientos críticos para facilitar decisiones operacionales y ejecutivas."
        image="/dashboard-sitrap.png"
      />

      <Section
        eyebrow="03 · Registro E1"
        title="Codificación inteligente de lotes"
        text="Cada lote se registra con datos estandarizados, origen, especie, vivero, calidad y trazabilidad histórica, permitiendo incorporar producción nueva y regularizar lotes existentes."
        image="/e1-formulario-lotes.png"
      />

      <Section
        eyebrow="04 · Identidad digital"
        title="QR y etiqueta imprimible"
        text="Cada lote adquiere una identidad digital única mediante código SITRAP, QR, etiqueta imprimible, PDF y formato compatible con impresión operacional."
        image="/qr-lote-sitrap.png"
      />

      <Section
        eyebrow="05 · Registro E2"
        title="Movimientos operacionales trazables"
        text="SITRAP permite registrar traslados, recepciones, despachos, bajas, devoluciones y transformaciones, manteniendo control de origen, destino, cantidades y responsables."
        image="/e2-registro-movimientos.png"
      />

      <Section
        eyebrow="06 · Consulta de lote"
        title="Ficha rápida y ficha completa"
        text="La consulta permite revisar stock, especie, vivero, calidad, historial y trazabilidad de cada lote, conectando información de gabinete con decisiones en terreno."
      >
        <div className="triple">
          <img src="/ficha-rapida-lote.png" />
          <img src="/ficha-completa-lote.png" />
          <img src="/ficha-lote-qr.png" />
        </div>
      </Section>

      <Section
        eyebrow="07 · Despacho"
        title="Ticket automático y respaldo documental"
        text="Cada despacho puede generar comprobantes automáticos, consolidando especies, cantidades, contrato, EECC y datos logísticos para respaldo operacional."
      >
        <div className="double">
          <img src="/ticket-despacho-a4.png" />
          <img src="/ticket-termico-58mm.png" />
        </div>
      </Section>

      <Section
        eyebrow="08 · Operación móvil"
        title="SITRAP en terreno"
        text="La aplicación móvil permite consultar lotes, acceder a QR, revisar fichas y apoyar operaciones desde vivero, despacho o terreno."
        image="/app-movil-sitrap.png"
      />

      <Section
        eyebrow="09 · Arquitectura"
        title="Sistema integrado de trazabilidad"
        text="SITRAP conecta formularios, base de datos, dashboard web, aplicación móvil, QR, tickets e indicadores, utilizando una arquitectura simple y escalable."
        image="/infograma-sitrap.png"
      />

      <section className="closing">
        <p className="eyebrow">10 · Valor estratégico para MLP</p>
        <h2>Una plataforma auditable para programas de restauración</h2>

        <div className="benefits">
          <span>Trazabilidad vivero-terreno</span>
          <span>Reducción de errores manuales</span>
          <span>Información en tiempo real</span>
          <span>Control por contratos y EECC</span>
          <span>Respaldo documental automático</span>
          <span>Escalable a otros programas ambientales</span>
        </div>

        <p className="finalText">
          SITRAP no es solamente un sistema de inventario. Es una plataforma de
          trazabilidad operacional que conecta el mundo físico con el digital.
        </p>
      </section>
    </main>
  );
}
