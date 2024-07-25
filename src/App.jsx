import Test from "./Test";
import "./app.scss"
import AboutUs from "./components/aboutus/AboutUs";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OurServices from "./components/ourservices/OurServices";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="parallaxAboutUs"><Parallax type="aboutUs"/></section>
    <section><AboutUs/></section>
    <section id="parallaxServices"><Parallax type="services"/></section>
    <OurServices/>
    <section id="Contact">Contact</section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
