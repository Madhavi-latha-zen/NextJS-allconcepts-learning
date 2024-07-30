export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>

      <h1>Features part</h1>
    </div>
  );
}
