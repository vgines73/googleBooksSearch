import React from "react";

const Cards = (props) => {
  const styles = {
    cardstyles: {
      width: "800px",
      marginTop: "50px",
      marginRight: "10px",
      marginLeft: "0",
    },
    imageStyles: {
      height: "18rem",
      width: "18rem",
    },
  };
  return (
    <div>
      <div className="card" style={styles.cardstyles}>
        <div className="row">
          <div className="col-md-4">
            <img
              src={props.image}
              className="card-img-top"
              style={styles.imageStyles}
              alt="book"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>
              <h4 className="card-text">By: {props.authors}</h4>
              <p className="card-text">Description: {props.description}</p>
              <a href={props.link} className="btn btn-primary" target="blank">
                Check it out!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
