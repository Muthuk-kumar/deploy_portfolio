import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import video from '/src/assets/test.mp4';
const App = () => {
  return (
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="main relative">
    {/* Ensure video is set behind other content */}
        <video className="vbg" src={video} autoPlay loop muted playsInline style={{ pointerEvents: 'none', zIndex: -1 }} />

    {/* Place Hero inside main, with overlay-content styling */}
        <div className="overlay-content" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}>
          <Hero />
        </div>
      </div>

  {/* Other components */}
  <About />
  <Experience />
  <Tech />
  <Works />
  <div className="relative z-0">
    <Contact />
    <StarsCanvas /> {/* This is the 3D star. */}
  </div>
</div>
    </BrowserRouter>
  )
}

export default App
