// src/components/PasswordLengthMeter.js
import React from 'react';
import { useSelector } from 'react-redux';

const PasswordLengthMeter = () => {
    const passwordLength = useSelector((state) => state.passwordLength);

    return (
        <div className="progress">
            <div className={`progress-bar bg-success`} role="progressbar" style={{ width: `${(passwordLength / 50) * 100}%` }}>
                {passwordLength} characters
            </div>
        </div>
    );
};

export default PasswordLengthMeter;
