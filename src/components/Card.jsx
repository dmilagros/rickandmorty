import React from "react";
import Chip from "./Chip";
import "../css/card.css";

const Card = (props) => {
  const { urlImage, name, gender, origin, type, status, color } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={urlImage} alt="" height="100" width="200" />
      </div>
      <div className="card-content">
        <div className="card-description">
          <p>Nombre: {name}</p>
          <p>Género: {gender}</p>
          <p>Origen: {origin}</p>
          <p>Tipo: {type}</p>
        </div>
        <div className="card-chip">
          <Chip chipDescription={status} color={color} />
        </div>
      </div>
    </div>
  );
};

export default Card;
