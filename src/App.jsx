import Test from "./Test";
import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
    </section>
    <section><a href="">Home</a></section>
    <section id="About Us">Parallax</section>
    <section>About Us</section>
    <section id="Product and Services">Parallax</section>
    <section>Products and Services</section>
    <section id="Our Team">Parallax</section>
    <section>Our Team</section>
    <section id="Our Advantages">Parallax</section>
    <section>Our Advantages</section>
    <section id="Vision and Mission">Parallax</section>
    <section>Vision and Mission</section>
    <section id="Contact">Contact</section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
