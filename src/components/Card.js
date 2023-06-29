import React from 'react';

const Card = ({ title, description, image, backgroundColor, onClick }) => {
  return (
    <div
      style={{
        backgroundColor,
        padding: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
