import React, { useState } from 'react';

const Card = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const addDefaultSrc = (e) => {
    e.target.src = '../../src/assets/placeholder.png';
  };

  return (
    <>
      <div className="bg-gray-700 hover:opacity-70 hover:border-4 box-border shadow-lg max-h-72 overflow-hidden w-38 md:w-26">
        <div
          className="text-white font-mono py-2"
          onClick={() => setShowPopup(true)}
        >
          {props.title}
        </div>
        <img
          className="w-full max-h-96"
          onError={addDefaultSrc}
          src={props.image}
        />
      </div>
      {showPopup && (
        <div className="w-full h-screen bg-gray-800 bg-opacity-50 fixed top-0 left-0 z-20">
          <div className="mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-1">
            <div className="bg-white px-6 py-4 mt-36 rounded-md text-lg w-full grid gap-3 shadow-md ">
              <div className="text-2xl font-bold">{props.title}</div>
              <p>{props.releaseYear}</p>
              <div className="md:flex items-center gap-3">
                <img
                  className="max-w-xs w-40 mx-auto md:w-auto"
                  onError={addDefaultSrc}
                  src={props.image}
                />
                <p>{props.description}</p>
              </div>
              <button onClick={() => setShowPopup(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
