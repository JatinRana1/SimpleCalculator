import React from "react";
import { Form } from "react-bootstrap";

export const Console = props => {
    return (
        <div className="console mb-2">
            <Form.Control className="text-end bg-console border border-dark shadow-none rounded-0" as="textarea" readOnly value={props.result}></Form.Control>
            <Form.Control className="text-end bg-console border border-dark shadow-none rounded-0" as="input" readOnly value={props.input}></Form.Control>
        </div>        
        
    )
}