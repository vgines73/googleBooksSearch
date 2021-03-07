import React from "react";
import Cards from "../Components/Cards/Cards";

const Books = (props) => {
  return (
    <div>
      {props.books.map((book) => (
        <Cards
          title={book.title}
          authors={book.authors}
          description={book.description}
          image={book.image}
          link={book.link}
        />

      ))}
      <h1>hello from books</h1>
    </div>
  );
};

export default Books;
