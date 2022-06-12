import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Projets from "./components/projets/Projets";

function WebContent() {
  return (
    <>
      
      <Header />
      <Nav />
      <Home />
      <About />
      <Projets/>
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;