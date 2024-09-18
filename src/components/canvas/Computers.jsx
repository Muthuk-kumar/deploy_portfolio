import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'; // Creates a canvas so we can place something on it
// Helper tools that facilitate drawing an object on the canvas. GLTF -> allows us to import 3D models
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'; // User defined

const Computers = ( {isMobile} ) => {
  // Importing the PC GLTF model to the project
  const computer = useGLTF('../desktop_pc/scene.gltf');
  return (
    <mesh>
      {/* Use mesh and not div for 3D models */}
      <hemisphereLight intensity={0.5} groundColor="black" /> {/*Need light to see any model*/}
      <pointLight intensity={0.5} />  {/*straight facing point light */}
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
         {/*is mobile is used in changing the object size based on screen size*/}
      <primitive 
      object={computer.scene} 
      scale={isMobile? 0.7: 0.75} 
      position={isMobile? [0,-3,-2.2]: [0,-3.55,-1.5]}
      rotation={[-0,0,0]}
      /> {/* Load the object in React Three Fiber canvas. check what primitive and the whole lines of code does. */}
    </mesh>
  );
};

// Creating a new component to load the model into React Three Fiber canvas
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  {/* using isMobile variable to change the size of the 3d model to fit in small screens like mobile phone screen */}
  
  useEffect( () => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return() => mediaQuery.removeEventListener('change',handleMediaQueryChange);
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, -1, 5], fov: 27 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Provides a loader while the model is rendering */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> {/* To move the model. Zoom is disabled, and rotation is allowed only within a certain angle */}
        <Computers isMobile={isMobile} /> {/* Adding the model defined above */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;


{/*The computer model didn't render at first, yt comments suggested to do one of the folloing
  1) Delete fallback component in Suspense
  2) Change the loader file in fallback from <div>loader<div> to console.logs
  both solved the issue. But i went with 2nd. FIND THE REASON FOR THIS PROBLEM.
  also downgraded three to version 0.149.0 to fix lighting 
  
  update: fixed this issue when I changed the Loader file to have a loading percentage. 
  Anything except a <div> </div> works to be good*/}