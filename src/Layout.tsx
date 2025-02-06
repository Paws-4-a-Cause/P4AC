import Navbar from '../src/components/Navbar';
import { ReactNode } from "react";
import Footer from "./components/footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Layout;
