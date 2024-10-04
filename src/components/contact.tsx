"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/useInView"
import SubmitBtn from "./submit-btn"

import { Fade } from "react-awesome-reveal"


export default function Contact(){
  const {ref} = useSectionInView("#contact");
  return(
    <motion.section id="contact" ref={ref} className="mb-28">

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <SectionHeading>
          {"Contact me"}
        </SectionHeading>
      </Fade>
    
      <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          {"Feel free to contact me directly through this form"}
        </p>
      </Fade>

      <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
        <form action="" className="mt-10 flex flex-col dark:text-black">
          <input className="h-14 px-4 rounded-lg border-black dark:bg-white dark:text-white/80" 
            name="senderEmail"
            type="email"
            maxLength={500}
            placeholder={"Your Email"} 
            required
          />

          <textarea className="h-52 my-3 rounded-lg resize-none border-black p-4 dark:bg-white dark:text-black" 
            name="message" id="" 
            maxLength={5000}
            placeholder="Message"
            required        
          />

          <SubmitBtn text={"submit"}  />
        </form>
      </Fade>
  
    </motion.section>
  )
}