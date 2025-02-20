import Navbar from '../src/components/Navbar';
import { ReactNode } from "react";
import Footer from "./components/footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div id="layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" , position: "relative"}}>
      <Navbar />
      <main style={{ flex: 1, width: "100%" }}>{children}</main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Layout;
