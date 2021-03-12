import React, { useState, useEffect } from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import CardsDelete from "../Components/CardsDelete/CardsDelete";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../utils/API";
import Hero from "../Components/Hero/Hero";
import image from "../Components/images/candle.jpg";

const Saved = () => {
  // setting initial state
  const [books, setBooks] = useState([]);

  // load all books and store them with setBooks
  useEffect(() => {
    console.log("useeffect");
    loadAllBooks();
  }, []);

  // loads all books and sets them to books
  function loadAllBooks() {
    console.log("gettingallbooks");
    API.getBooksData()
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((error) => console.log(error));
  }

  // delete a book using id but doesn't refresh the page after deleting
  function deleteThisBook(id) {
    console.log("deletethisbook");

    API.deleteBook(id)
      .then((res) => loadAllBooks())
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Hero backgroundImage={image} />
          </Row>
          <Row>
            <CardHeader
              title="Your Saved Search"
              text="Search for and Save Books of Interest"
            />
          </Row>
          {books.map((book, index) => (
            <Row key={index}>
              <CardsDelete
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                index={index}
                deleteBook={() => deleteThisBook(book._id)}
              />
            </Row>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Saved;
