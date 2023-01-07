import { useThree } from '@react-three/fiber';
import { BufferAttribute, BufferGeometry, Color, PointsMaterial } from 'three';

export const Sphere = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  const color = new Color(0xffffff);

  const radius = 100;

  // Create the particles
  for (let i = 0; i < particleCount; i += 1) {
    // Calculate the polar and azimuthal angles
    const polar = Math.random() * Math.PI;
    const azimuthal = Math.random() * 2 * Math.PI;

    // Calculate the position of the particle using polar coordinates
    const x = radius * Math.sin(polar) * Math.cos(azimuthal);
    const y = radius * Math.sin(polar) * Math.sin(azimuthal);
    const z = radius * Math.cos(polar);

    // Set the position of the particle
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    // Set the color of the particle
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    // Set the size of the particle
    sizes[i] = aspect * 0.5; // Increase the size of the particles
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(positions, 3));
  geometry.setAttribute('color', new BufferAttribute(colors, 3));
  geometry.setAttribute('size', new BufferAttribute(sizes, 1));

  const material = new PointsMaterial({
    vertexColors: true,
    sizeAttenuation: false,
  });

  return (
    <>
      <points geometry={geometry} material={material} />
    </>
  );
};
