import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img src={props.image} className="card-img-top" alt="book" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-text">{props.authors}</h4>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary">
            Check it out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
