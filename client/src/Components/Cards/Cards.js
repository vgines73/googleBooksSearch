import React from "react";

const Cards = (props) => {
  const styles = {
    cardstyles: {
      width: "18rem",
      marginTop: "50px",
      marginRight: "10px",
      marginLeft: "0"
    },
    imageStyles: {
      height: "18rem",
      width: "18rem"
    }
  }
  return (
    <div>
      <div className="card" style={styles.cardstyles}>
        <img src={props.image} className="card-img-top" style={styles.imageStyles} alt="book" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-text">{props.authors}</h4>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-primary" target="blank">
            Check it out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
