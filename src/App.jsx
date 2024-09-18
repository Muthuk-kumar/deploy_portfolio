import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
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
