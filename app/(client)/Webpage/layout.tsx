
import Navbar from './Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body >
        {/* ✅ Navbar should be a Client Component */}
        <Navbar />
        <div className="pt-[64px]">
        {children}
        </div>
      </body>
    </html>
  );
}
