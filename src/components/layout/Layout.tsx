
import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMobileMenuToggle={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
