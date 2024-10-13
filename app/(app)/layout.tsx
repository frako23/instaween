import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="py-[80px] overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
