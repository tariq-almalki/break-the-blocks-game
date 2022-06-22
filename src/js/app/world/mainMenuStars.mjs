import * as THREE from '../../../../threeJS/three.module.js';

// points
const vertices = [];

for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(2000);
    const z = THREE.MathUtils.randFloatSpread(2000);
    vertices.push(x, y, z);
}

const geometry = new THREE.BufferGeometry(); // create a simple square shape.
geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
);

const textureLoader = new THREE.TextureLoader();
// particles texture
const particlesTexture = textureLoader.load('/Images/1.png');

const particlesMaterials = new THREE.PointsMaterial({
    size: 5,
    sizeAttenuation: true,
    transparent: true,
    alphaMap: particlesTexture,
    depthWrite: false,
});

export const particles = new THREE.Points(geometry, particlesMaterials);
