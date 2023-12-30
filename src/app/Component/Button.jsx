import React from 'react'
import styled from 'styled-components'


const ButtonComponent = styled.button` 
    cursor:pointer;
    padding:10px;
    background-color:${props =>
        props.variant === "outline-primary" ? "transparent" :
            props.variant === "primary" ? "#009688" : "white"
    };
    border:${props =>
        props.variant === "outline-primary" ? "2px solid #dee2e6" : "none"
    };
    border-radius:3px;
    color:${props =>
        props.variant === "primary" ? "white" :
            props.variant === "danger" ? "red" : "black"
    };
    font-weight:500;
    font-size:20px
`;
const Button = ({ type, variant, className, id, onClick, children }) => {
    return (
        <ButtonComponent
            type={type ? type : "button"}
            variant={variant}
            className={className ? `btn-component ${className}` : "btn-component"}
            id={id}
            onClick={onClick}
        >
            {children}
        </ButtonComponent>
    )
}

export default Button
