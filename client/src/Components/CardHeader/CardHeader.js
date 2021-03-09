import React from "react";

const CardHeader = (props) => {
  return (
    <div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text text-center">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
