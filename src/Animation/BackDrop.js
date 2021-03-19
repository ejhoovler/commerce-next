import React from 'react';
import * as THREE from 'three';

function BackDrop({ position, rotation, opacity }) {

    return (
        <mesh receiveShadow position={position} rotation={rotation}>
            <planeBufferGeometry attach="geometry" args={[101, 101]} />
            <meshStandardMaterial 
                side={THREE.DoubleSide}
                attach="material"
                color="#eeeeee"
                opacity={opacity}
            />
        </mesh>
    );
}

export default BackDrop;