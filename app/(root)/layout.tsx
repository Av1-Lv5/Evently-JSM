import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
