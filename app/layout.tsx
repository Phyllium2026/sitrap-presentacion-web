export const metadata = {
  title: "SITRAP Presentación Ejecutiva",
  description: "Sistema de Inventario y Trazabilidad de Plantas"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
