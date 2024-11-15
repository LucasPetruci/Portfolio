import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import "./styles/components/app.sass";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div id="portfolio">
        <h1 className="desktop-title">
          Lucas Petruci
        </h1>
        <Header className="mobile-header" />
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
