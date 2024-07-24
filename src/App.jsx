import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="parallaxAboutUs"><Parallax type="aboutUs"/></section>
    <section>About Us</section>
    <section id="parallaxServices"><Parallax type="services"/></section>
    <section>Products and Services</section>
    <section id="Contact">Contact</section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
