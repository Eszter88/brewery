import React from "react";
import "./card.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Card(props) {
  return (
    <div className="card-item">
      <button className="btn-circle">{props.index}</button>
      <div className="title-container">
        <h1 className="title">{props.title}</h1>
      </div>
      <hr />
      <div className="details">
        <p>{props.sub}</p>
        <p>{props.text}</p>
      </div>
      <button className="btn-square">
        <div className="button-text">Details</div>
        <ArrowForwardIcon className="arrow-icon" />
      </button>
    </div>
  );
}

export default Card;
