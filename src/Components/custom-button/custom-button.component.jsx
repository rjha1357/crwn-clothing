import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
<<<<<<< HEAD
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps} >
=======
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
>>>>>>> ba24d945bbf902d82fa891b2cc4d251df722764d
        {children}
    </button>
);

export default CustomButton;