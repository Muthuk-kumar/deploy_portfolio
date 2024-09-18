import React, {useEffect, useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Scrambler from '/src/scrambling-text/scrambling-text';

{/*contains the 3d pc model */}
const Hero = () => {
  //define the text to be scrambled as state.
const [My_name, setText] = useState('Muthukkumar');
// create an instance of Scrambler using useRef.
const scramblerRef = useRef(new Scrambler());
useEffect(() => {
 // call scramble function with the text to be scrambled and handler.
 scramblerRef.current.scramble(My_name, setText);
}, []);


  return (
    <section className="relative w-full h-screen mx-auto">
      {/*the below line provide the corrdinates on where to create subsequent conent */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/*Line below tells where the dot and line should start */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/*the below two lines create the dot and the gradient line respectively */}
          <div className="w-5 h-5 rounded-full bg-[#880808]"/>
          <div className="w-1 sm:h-80 h-40 blood-red-gradient"/>
        </div>

        {/*creating the text*/}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#DC143C]">{My_name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`} style={{ color: '#DC143C' }}>
            Driven by interest, crafting precise innovations.<br />
            Engineer. Tech enthusiast.
          </p>
        </div>
      </div>

      {/*  commenting for using bg <ComputersCanvas /> {/* the three 3d computer component. User defined */}
      
      {/* this div contains the scroll indication gif*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items -center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
        </div>    
    </section>
  )
}

export default Hero 