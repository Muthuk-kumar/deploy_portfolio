import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import video from '/src/assets/test.mp4';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <Navbar />
        <div className="main">
          <video className= "vbg" src={video} autoPlay loop muted playsInline/>
          <div className='overlay-content'>
            <Hero /> 
          </div>
        </div>
        {/*Using the components that we defined ealier.*/}
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          {/*this div is used to display 3D Stars*/}
          <Contact/>
          <StarsCanvas/> {/*this is the 3D star.*/}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
