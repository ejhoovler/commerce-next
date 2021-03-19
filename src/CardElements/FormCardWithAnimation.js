import React, { useState } from 'react';
import { Row, Form, Card, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import FormElement from './FormElement';
import Animation from '../Animation/Animation';

function FormCardWithAnimation(props) {
    const [hovered, setHovered] = useState(false);

    const hovering = useSpring({
        transform: hovered
            ? "translate3d(0px,0,0) scale(1.05) rotateX(0deg)"
    });

    return (
        <animated.div
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            style={hovering}
        >
            <Row>
                <Card as={Col} sm={12} className="rounded infoCard">
                    <h1 className="text-center mt-4">{props.title}</h1>
                    <p className="text-center" style={{ color: "#eae6e5" }}>
                        Interact
                        <span>
                            <br />
                        </span>
                        Test card 4242.....
                    </p>
                    <Form onSubmit={props.handleSubmit} className="py-4">
                        <Animation
                            cardNum={props.cardNum}
                            cardName={props.cardName}
                            expDate={props.expDate}
                            cvv={props.cvv}
                            cardType={props.cardType}
                        />

                        <Form.Row className="mt-3">
                            {props.formDetails.map((field) => (
                                <FormElement
                                    key={field.controlId}
                                    controlId={field.controlId}
                                    smallColSize={field.smallColSize}
                                    formLabel={field.formLabel}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    handleChange={props.handleChange}
                                    value={field.value}
                                />
                            ))}
                        </Form.Row>
                    </Form>
                </Card>
            </Row>
        </animated.div>
    );
}

export default FormCardWithAnimation;