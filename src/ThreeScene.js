import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';

const ThreeScene = () => {
  const sceneRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Load GLB model
    const loader = new GLTFLoader();
    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('/path/to/draco/');
    // loader.setDRACOLoader(dracoLoader);

    loader.load(
        'src\models\mlsc.glb',
      (gltf) => {
        // Add the entire GLTF scene to your Three.js scene
        scene.add(gltf.scene);

        // Access each object in the model
        // const object1 = gltf.scene.children[0];
        // const object2 = gltf.scene.children[1];
        // const object3 = gltf.scene.children[2];
        // const object4 = gltf.scene.children[3];

        // Set up rigid body physics for each object (assuming you have a physics library)
        // Replace the following lines with your rigid body physics implementation
        // object1.userData.physics = createRigidBody(object1);
        // object2.userData.physics = createRigidBody(object2);
        // object3.userData.physics = createRigidBody(object3);
        // object4.userData.physics = createRigidBody(object4);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Set up animations here using a library like Tween.js or Three.js AnimationMixer
    // Example: Rotate the entire scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform rigid body animations here
      // Example: object1.rotation.x += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Clean up code if needed
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
