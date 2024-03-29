import React, { useRef, Suspense } from 'react';
import CardText from './CardText';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Model from './Scene';

function Card(props) {
    const creditCard = useRef();

    useFrame(() => (creditCard.current.rotation.y += 0.003));

    return (
        <Suspense fallback={null}>
            <group ref={creditCard}>
                <Model 
                    cardType={props.cardType}
                    number={props.cardNum}
                    name={props.cardName}
                    expiry={props.expDate}
                    cvv={props.cvv}
                />
                <mesh receiveShadow position={[0.19, 3.1, 0.73]}>
                    <planeBufferGeometry attach="geometry" args={[26.8, 3]} />
                    <meshStandardMaterial 
                        attach="material"
                        color="#0f0f0f"
                        opacity={0.3}
                        side={THREE.DoubleSide}
                        metalness={6}
                    />
                </mesh>
                <CardText
                    position={[-11, -0.4, 0.89]}
                    text={props.number}
                    fontSize={2}
                />
                <CardText position={[-11, -6, 0.89]} text={props.name} fontSize={1.8} />
                <CardText position={[5, -4, 0.89]} text={"Valid Thru"} fontSize={1} />
                <CardText position={[5, -6, 0.89]} text={props.expiry} fontSize={1.8} />
                <CardText 
                    rotation={[0, Math.PI, 0]}
                    position={[-5, 0, 0.73]}
                    text={props.cvv}
                    fontSize={1.9}
                />
            </group>
        </Suspense> 
    );
}

export default Card;