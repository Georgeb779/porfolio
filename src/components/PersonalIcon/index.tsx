import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const PersonalIcon = () => {
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={5} />
    </>
  );
};
