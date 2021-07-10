import React from 'react';
import './Button.css';

/*resuable variables to make edits to the button easier. */
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large', 'btn--wide'];
const COLOR = ['primary', 'maroon'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    
    /*to check to see which style,size, and color is being requested from other files*/ 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
          className={` button ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
          onClick={onClick}
          type={type} >
          {children}
        </button>
    );

};