import React from 'react'
import { Tilt } from 'react-tilt'; {/*to give tilting animations for tech stack cards */}
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
         variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            options={{
              max:45,
              scale:1,
              speed:450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img src={icon} alt={title}  className="w-16 h-16 object-contain"/>
              <h3 className="text-white text-[20px] font-bold text-centre">{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
          </p>
        <h2 className={styles.sectionHeadText}
        >Overview.
        </h2>
      </motion.div>

      <motion.p
         variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
      >
      Dedicated engineer focusing on embedded systems, IoT, and control systems.
      Striving to develop thoughtful solutions by blending hardware and software knowledge. 
      Committed to continuous learning and delivering quality results, while recognizing the vast expertise still to acquire. 
      Eager to contribute to innovative projects, hoping to play a small role in advancing industry practices alongside more experienced colleagues.
        </motion.p>
        {/* need to link resume */}
        {/*displaying cards for techstack */}

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service,index) => (
            <ServiceCard key={service.title} index = {index} {...service} />
          ))}
        </div> {/* changes on the services can be changed in constants/index.js file */}

    </>
  )
}

export default SectionWrapper(About,"about") 