import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './hero.scss';

const Hero = () => {
  const [scrollingUp, setScrollingUp] = useState(true); // Initially set to true to animate on page load
  const currentPositionRef = React.useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition < currentPositionRef.current) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      currentPositionRef.current = currentPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const text = "The Best Support System For Your Business".split(" ");

  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textContainer">
                <motion.img className='logoStroke' src="/mind2screen/logo_stroke-2.png" initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }} transition={{ duration: 0.5, delay: 0.25 }} alt=""/>
                <h1>
                {text.map((el, i) => (
                    <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: i / 2,
                    }}
                    key={i}
                    >
                    {el}{" "}
                    </motion.span>
                ))}
                </h1>
            </div>
        </div>
        <div className="imageContainer">
            <div className="image-stack">
                <motion.img
                className="image"
                src="/mind2screen/mind2screen_bg2.png"
                style={{ zIndex: 1 }}
                variants={container}
                initial="hidden"
                animate={scrollingUp ? "visible" : "hidden"}
                alt=""
                />
                <motion.img
                className="image"
                src="/mind2screen/mind2screen_char2.png"
                style={{ zIndex: 2 }}
                alt=""
                />
            </div>
        </div>
    </div>
  );
};

export default Hero;
