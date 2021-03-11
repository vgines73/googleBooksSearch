import React, { useState, useEffect } from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import CardsDelete from "../Components/CardsDelete/CardsDelete";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../utils/API";
import axios from "axios";
import { load } from "dotenv/types";

const Saved = (props) => {
  // setting initial state
  const [books, setBooks] = useState([]);

  // load all books and store them with setBooks
  useEffect(() => {
    loadAllBooks();
  }, []);

  // loads all books and sets them to books
  function loadAllBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error));
  }

  // Deletes a book from the database with an id then reloads all books
  // tried this and it didn't work
  const deleteBook = async (e) => {
    const dataValue = e.target.getAttribute("data-value");
    const deleteOneBook = books[dataValue];
    console.log(deleteOneBook);

    try {
      const deleteResult = await axios.delete("/api/books", deleteOneBook);
      console.log(deleteResult);
      loadAllBooks()
    } catch (error) {
      console.log(error);
    }
  };

  //tried this and it didn't work
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //   .then(res => loadAllBooks())
  //   .catch(err => console.log(err))
  // }

  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <CardHeader
              title="Your Saved Search"
              text="Search for and Save Books of Interest"
            />
          </Row>
          {props.books.map((book, index) => (
            <Row key={index}>
              <CardsDelete
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                index={index}
                deleteBook={deleteBook}
              />
            </Row>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Saved;
