import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model(props) {
    const texture = useMemo(
        () => new THREE.TextureLoader().load(props.cardType),
        [props.cardType]
    );

    const group = useRef();
    const { nodes, materials } = useLoader(GLTFLoader, './card/scene.gltf');
    const material = new THREE.MeshPhysicalMaterial({ map: texture });

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} position={[-6.1, -9, 6]}>
                <mesh 
                    material={material}
                    geometry={nodes.mesh_0.geometry}
                    castShadow
                    metalness={8}
                />
                <mesh 
                    material={materials.Card3initialSha}
                    geometry={nodes.mesh_1.geometry}
                    castShadow
                />
                <mesh 
                material={material}
                geometry={nodes.mesh_2.geometry}
                castShadow
                metalness={8}
            />
            </group>
        </group>
    );
}