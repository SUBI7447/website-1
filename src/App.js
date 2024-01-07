import React, { useRef } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Environment, OrbitControls } from '@react-three/drei';
import obj from './models/mlsc1.glb';
import './App.css'

const Model = () => {
  const modelRef = useRef();

  const gltf = useLoader(GLTFLoader, obj);

  if (gltf && gltf.scene) {
    modelRef.current = gltf.scene;
    modelRef.current.scale.set(1, 1, 1);
    modelRef.current.position.set(0, -10, -20);
    modelRef.current.rotation.set(0, -Math.PI / 2, 0);
  }

  return <primitive object={modelRef.current} />;
};

const App = () => {
  return (
    <div  className='full-page-container'>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Set up the environment texture using a cube map */}
      <Environment preset="warehouse" />

      {/* Adjust the camera position */}
      <perspectiveCamera position={[0, 0, 5]} />

      <Model />

      {/* Add orbit controls for interaction (optional) */}
      <OrbitControls />
    </Canvas>
    </div>
  );
};

export default App;
