import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg=useTransform(scrollYProgress, [0,1], ["0%", "150%"])
    const yMain=useTransform(scrollYProgress, [0,1], ["0%", "-25%"])
    const yText=useTransform(scrollYProgress, [0,1], ["0%", "25%"])


    return (
        <div 
            className="parallax"
            ref={ref}
            style={{
                background: "black",
            }}
        >
            <motion.h1 style={{ x: yText }}>
                {type==="aboutUs" ? "Who Are We?" : "What We Do?"}
            </motion.h1>
            <motion.div style={{ y: yBg }} className="topSpace"></motion.div>
            <motion.div style={{ x: yMain }} className="midSpace"></motion.div>
            <motion.div style={{ x: yBg }} className="bottomSpace"></motion.div>
        </div>
    )
}

export default Parallax