import React,{useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'; {/* used to navigate to other parts of the page */}
import { styles } from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close } from '../assets';
import Scrambler from '/src/scrambling-text/dist/scrambling-text';
const Navbar = () => {
    
  const words = [
    'cheen dabak tum tum',
    'I play valorant in the evenings',
    'Engineer',
    'Professional gully Cricketer',
    'I (do not) go to gym',
    'Coffee addict',
    'Master procrastinator',
    'Meme connoisseur',
    'Professional nap taker',
    'Fluent in sarcasm and Python',
    'Collector of unfinished side projects',
    'Part-time philosopher'
  ];
  const [current_index, setCurrentIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const scramblerRef = useRef(new Scrambler());


  useEffect(() => {
    // call scramble function with the text to be scrambled and handler.
   const scrambleCurrentWord = () => {
    scramblerRef.current.scramble(words[current_index], setText);
  }

  scrambleCurrentWord();
  const intervalId = setInterval(() => {
    setCurrentIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % words.length;
      scrambleCurrentWord(); // Scramble the next word
      return nextIndex;
    });
  }, 4500); // Change word every 3 seconds

  return () => clearInterval(intervalId); // Clean up interval on component unmount
}, [current_index, words]);

  const [active,setActive] =  useState(`'`); {/* what is this and what does this do? */}
  const [toggle,setToggle] =  useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* special react router on DOM linK*/}
          {/* '/' - top of the page */}
          {/*callback function onclick*/}
          <Link 
            to="/"  
            className="flex items-center gap-2" 
            onClick={() => 
              {setActive(""); {/*setActive is gonna keep track of where we are on the page */}
              window.scrollTo(0,0); {/*when clicked go to the page top */}
            }} 
            >
              {/*also rendering a logo at the top*/}
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              <p className="text-white text-[18px] font-bold cursor-pointer flex"> Muthukkumar RB 
                &nbsp; | <span className="mt-1 text-secondary text-[13px] sm:block hidden">&nbsp; {text}
              </span> </p> {/* <---> */}
            </Link>
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {/* any thing inside a {} is a dynamic block of code */}
              {navLinks.map((link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === link.title
                    ? "text-white"
                    : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                  >
                    <a href={`#${link.id}`}>{
                    link.title}
                      </a> 
                  </li>
              ))}
              </ul>
              {/* navigation for smaller screen or nav bar for mobile screen */}

              {/*burger button for phone*/}
              <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                  src={toggle ? close : menu}
                  alt = "menu"
                  className="w-[28px] h-[28px] object-contain cursor-pointer"
                  onClick={() =>setToggle(!toggle)}
                  />
              </div>

              {/*showing menu after pressing the button */}
              <div className={`${!toggle? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                {/* any thing inside a {} is a dynamic block of code */}
                {navLinks.map((link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-Poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    >
                      <a href={`#${link.id}`}>{
                      link.title}
                        </a> 
                    </li>
                ))}
                </ul>
              </div>
        </div>
      </nav>
  )
}

export default Navbar