import { useRef } from "react";
import "./aboutus.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutUs = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
  
    return (
      <motion.div
        className="aboutus"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
      >
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <h1>
              <motion.b whileHover={{color:"orange"}}>Mind</motion.b><span style={{ color:"orange", fontWeight: 'bold' }}>2</span><motion.b whileHover={{color:"orange"}}>Screen</motion.b>
            </h1>
          </div>
        </motion.div>
        <motion.div className="textContainer" variants={variants}>
          <p>
            About Us
            {/* <br /> and move forward */}
          </p>
          <hr />
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>
                Mind2Screen or CV. Mindtoscreen Technology Indonesia was established in 2024 by two experienced individuals in the technology field, 
                with a vision to become the leading technology company in Indonesia. 
                We are committed to developing innovative technology products and services that will help our clients achieve their business goals
            </h2>
          </motion.div>
        </motion.div>
        <motion.div className="textContainer" variants={variants}>
          <p>
            Our Teams
            {/* <br /> and move forward */}
          </p>
          <hr />
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>
                Our team consists of highly experienced and dedicated professionals in Software engineering, Database engineering, Frontend engineering, Backend engineering, 
                QA engineering, Mobile Developer, UI/UX design, and Project manager. 
                We believe that a solid and creative team is the key to success.
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>
    );
};


export default AboutUs