import React from 'react';

const Card = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <img src={props.image} />
      <p>{props.description}</p>
      <p>{props.releaseYear}</p>
    </>
  );
};

export default Card;
