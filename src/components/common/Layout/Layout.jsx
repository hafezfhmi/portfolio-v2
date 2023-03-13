import Footer from "../Footer";
import MobileNav from "../MobileNav";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <MobileNav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
