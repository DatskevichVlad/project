import React from 'react';

const Button = ({ text, color, size, disabled, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color, fontSize: size }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
