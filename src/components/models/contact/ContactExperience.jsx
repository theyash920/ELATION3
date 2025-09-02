import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";
import footerGlbData from '../../../footerglb.json';

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight 
        intensity={footerGlbData.Light0.Intensity / 255} 
        color={`rgb(${footerGlbData.Light0.Red},${footerGlbData.Light0.Green},${footerGlbData.Light0.Blue})`} 
      />

      <directionalLight 
        position={[5, 5, 3]} 
        intensity={footerGlbData.Light1.Intensity / 10} 
        color={`rgb(${footerGlbData.Light1.Red},${footerGlbData.Light1.Green},${footerGlbData.Light1.Blue})`} 
      />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={footerGlbData.Light2.Intensity / 10}
        color={`rgb(${footerGlbData.Light2.Red},${footerGlbData.Light2.Green},${footerGlbData.Light2.Blue})`}
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
