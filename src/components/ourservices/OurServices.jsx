import "./ourservices.scss"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id:1,
        title:"Software Development",
        img:"/mind2screen/softwareDev.png",
        desc:"We design and develop software tailored to the specific needs of our clients."
    },
    {
        id:2,
        title:"System Integration",
        img:"/mind2screen/systemInt.png",
        desc:"We integrate various systems within our clients' companies to enhance efficiency and effectiveness."
    },
    {
        id:3,
        title:"Management & Maintenance System",
        img:"/mind2screen/manage&maintenance.png",
        desc:"We provide manage & maintenance services to ensure the smooth operation and security of our clients' systems."
    },
    {
        id:4,
        title:"IT Consulting",
        img:"/mind2screen/itConsult.png",
        desc:"We offer IT consulting services to help our clients select and implement the right technological solutions."
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1],[-200, 200]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={`${import.meta.env.BASE_URL}/`+item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 style={{ y }}>{item.title}</h2>
                        <p>{item.desc}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const OurServices = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="ourservices" ref={ref}>
            <div className="progress">
                <h1>Our Services</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default OurServices