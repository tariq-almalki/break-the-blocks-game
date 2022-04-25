import * as THREE from '../../../../threeJS/three.module.js';
import * as CANNON from '../../../../cannon-es/cannon-es.js';

// loaders
const textureLoader = new THREE.TextureLoader();
// color of the playground
const recMatCap = textureLoader.load('/Images/silver_2.png');
// color of the spaceship
const spaceshipMatCap = textureLoader.load('/Images/purple.png');
// colors of the blocks
const yellowMatCap = textureLoader.load('/Images/yellow.png');
const redMatCap = textureLoader.load('/Images/red_1.png');
const blueMatCap = textureLoader.load('/Images/cyan.png');
const whiteMatCap = textureLoader.load('/Images/matWhite.png');
// color of the ball
const ballMatCap = textureLoader.load('/Images/red_2.png');

// prettier-ignore
const arrayOfColors = [redMatCap, yellowMatCap, blueMatCap, whiteMatCap];

// Materials
const defaultMaterial = new CANNON.Material('default');

export const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1, // 0 - 1
        restitution: 0.3, // 0 - 1
    }
);

// playground
export const topRec = new THREE.Mesh(
    // width, height, depth
    new THREE.BoxGeometry(100, 5, 5),
    new THREE.MeshMatcapMaterial({ matcap: recMatCap })
);

topRec.position.set(0, 35, 0);
//! CANNON.js
const topRecShape = new CANNON.Box(
    new CANNON.Vec3(100 * 0.5, 5 * 0.5, 5 * 0.5)
);

export const topRecBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 35, 0),
    shape: topRecShape,
    material: defaultMaterial,
});
//!

export const leftRec = new THREE.Mesh(
    new THREE.BoxGeometry(3, 70, 5),
    new THREE.MeshMatcapMaterial({ matcap: recMatCap })
);

leftRec.position.set(-48.5, 0, 0);
//! CANNON.js
const leftRecShape = new CANNON.Box(
    new CANNON.Vec3(3 * 0.5, 70 * 0.5, 5 * 0.5)
);

export const leftRecBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(-48.5, 0, 0),
    shape: leftRecShape,
    material: defaultMaterial,
});
//!

export const bottomRec = new THREE.Mesh(
    new THREE.BoxGeometry(100, 5, 5),
    new THREE.MeshMatcapMaterial({ matcap: recMatCap })
);

bottomRec.position.set(0, -35, 0);
//! CANNON.js
const bottomRecShape = new CANNON.Box(
    new CANNON.Vec3(100 * 0.5, 5 * 0.5, 5 * 0.5)
);

export const bottomRecBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, -35, 0),
    shape: bottomRecShape,
    material: defaultMaterial,
});
//!

export const rightRec = new THREE.Mesh(
    new THREE.BoxGeometry(3, 70, 5),
    new THREE.MeshMatcapMaterial({ matcap: recMatCap })
);

rightRec.position.set(48.5, 0, 0);
//! CANNON.js
const rightRecShape = new CANNON.Box(
    new CANNON.Vec3(3 * 0.5, 70 * 0.5, 5 * 0.5)
);

export const rightRecBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(48.5, 0, 0),
    shape: rightRecShape,
    material: defaultMaterial,
});
//!

// spaceship
export const spaceship = new THREE.Mesh(
    new THREE.BoxGeometry(9, 1.5, 2),
    new THREE.MeshMatcapMaterial({ matcap: spaceshipMatCap })
);

spaceship.position.set(0, -25.9, 0);
//! CANNON.js
const spaceshipShape = new CANNON.Box(
    new CANNON.Vec3(9 * 0.5, 1.5 * 0.5, 2 * 0.5)
);

export const spaceshipBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, -25.9, 0),
    shape: spaceshipShape,
    material: defaultMaterial,
});
//!

// ball
export const ball = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 32),
    new THREE.MeshMatcapMaterial({ matcap: ballMatCap })
);

ball.position.set(0, -17.5, 0);

//! CANNON.js
const ballShape = new CANNON.Sphere(1);
export const ballBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, -17.5, 0),
    shape: ballShape,
    material: defaultMaterial,
});
//!

// materials for the blocks
const blockGeometry = new THREE.BoxGeometry(5, 2, 2);
//redMatCap
const redMatCapMaterial = new THREE.MeshMatcapMaterial({
    matcap: arrayOfColors[0],
});
//yellowMatCap
const yellowMatCapMaterial = new THREE.MeshMatcapMaterial({
    matcap: arrayOfColors[1],
});
//blueMatCap
const blueMatCapMaterial = new THREE.MeshMatcapMaterial({
    matcap: arrayOfColors[2],
});
//whiteMatCap
const whiteMatCapMaterial = new THREE.MeshMatcapMaterial({
    matcap: arrayOfColors[3],
});

// generator of the materials
function* matCapGenerator() {
    yield redMatCapMaterial;
    yield yellowMatCapMaterial;
    yield blueMatCapMaterial;
    yield whiteMatCapMaterial;
}

// getting the object generator;
const matCapGen = matCapGenerator();

export const groupOfBlocks = new THREE.Group();

let x = -42.5;
let y = 25.9;

//! CANNON.js
const blockShape = new CANNON.Box(new CANNON.Vec3(5 * 0.5, 2 * 0.5, 2 * 0.5));
export const arrayOfBlocks = [];
export const arrayOfBodies = [];
//!

for (let i = 0; i < 4; i++) {
    let matCapMaterial = matCapGen.next().value;
    for (let j = 0; j < 13; j++) {
        const block = new THREE.Mesh(blockGeometry, matCapMaterial);
        block.position.set(x, y);
        let body = new CANNON.Body({
            mass: 0,
            position: new CANNON.Vec3(x, y, 0),
            shape: blockShape,
            material: defaultMaterial,
        });
        let blockAndItsBody = {
            block,
            body,
        };
        arrayOfBlocks.push(blockAndItsBody);
        groupOfBlocks.add(block);
        x = x + 7;
    }
    x = -42.5;
    y = y - 2.3;
}

for (let i = 0; i < arrayOfBlocks.length; i++) {
    arrayOfBodies[i] = arrayOfBlocks[i].body;
}
