import React from 'react';

const Cartilla = ({ nombre, imagen }) => {
  return (
    <div className="cartilla">
      <div className="circulo">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="nombre">{nombre}</div>

      {/* CSS incrustado */}
      <style>{`
        .cartilla {
          width: 200px;
          height: 250px;
          border: 2px solid #ccc;
          border-radius: 10px;
          text-align: center;
          padding: 10px;
          margin: 10px;
          position: relative;
          background-color: #f5f5f5;
        }

        .circulo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          border: 3px solid #333;
        }

        .circulo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nombre {
          position: absolute;
          bottom: 10px;
          width: 100%;
          font-weight: bold;
          color: #222;
        }
      `}</style>
    </div>
  );
};

export default Cartilla;
