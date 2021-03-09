import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";
import Columns from "../Components/Columns/Col";

const styles = {
  titleStyles: {
    fontSize: "90px",
  },
  blue: {
    color: "blue",
  },
  red: {
    color: "red",
  },
  orange: {
    color: "orange",
  },
  green: {
    color: "green",
  },
  buttonStyles: {
    textAlign: "center",
  },
};
const Home = (props) => {
  // setting initial state
  const [books, setBooks] = useState([])
  const [form, setForm] = useState({})

  // loads all books and stores with setBooks
  useEffect(() => {
    loadAllBooks()
  }, [])

  // load all books and stores to books
  function loadAllBooks() {
    
  }
  return (
    <div>
      <Wrapper>
        <Container>
          <Row>

          </Row>
          <Row>
            <div className="card mt-5">
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={styles.titleStyles}
                >
                  <span style={styles.blue}>G</span>
                  <span style={styles.red}>o</span>
                  <span style={styles.orange}>o</span>
                  <span style={styles.blue}>g</span>
                  <span style={styles.green}>l</span>
                  <span style={styles.red}>e</span>
                  <span> </span>
                  <span style={styles.blue}>B</span>
                  <span style={styles.red}>o</span>
                  <span style={styles.orange}>o</span>
                  <span style={styles.blue}>k</span>
                  <span style={styles.green}>s</span>
                </h5>
                <br />
                <p className="card-text text-center">
                  Find and Save your Favorite Book
                </p>
                <a
                  href="/search"
                  className="btn btn-primary"
                  style={styles.buttonStyles}
                >
                  Let's Go!
                </a>
              </div>
            </div>
          </Row>
          {props.books.map((book) => (
            <Row>
              <Columns size="md-3">
                <Cards
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                />
              </Columns>
            </Row>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
