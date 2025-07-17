import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;