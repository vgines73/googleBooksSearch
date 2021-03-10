import React, { useState, useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";
import Columns from "../Components/Columns/Col";
import API from "../utils/API";
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
const Home = () => {
  // setting initial state
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});

  // loads all books and stores with setBooks
  useEffect(() => {
    loadAllBooks();
    loadOneBook()
  }, []);

  // load all books and stores to books
  function loadAllBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error));
  }

  // find a book by id
  function loadOneBook(id) {
    API.getBook(id)
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error))
  }

  // deletes a book from database by id
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res => loadAllBooks(res.data)))
      .catch((error) => console.log(error));
  }

  // handles updating component state when inputing
  function onChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // form submittal to save data
  function handleFormSubmit(e) {
    e.preventDefault();
    if (form.title && form.authors && form.description) {
      API.saveBook({
        title: form.title,
        authors: form.authors,
        description: form.description,
      })
        .then((res) => loadAllBooks())
        .catch((error) => console.log(error));
    }
  }
  return (
    <div>
      <Wrapper>
        <Container>
          <Row></Row>
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
          <Row>
            <Columns size="md-6">
              <h1>Save a Book</h1>
              <form>
                <input
                  onChange={onChange}
                  name="title"
                  type="text"
                  placeholder="Title (required)"
                />
                <input
                  onChange={onChange}
                  name="authors"
                  type="text"
                  placeholder="Authors (required)"
                />
                <input
                  onChange={onChange}
                  name="description"
                  type="text"
                  placeholder="Description (required)"
                />
                <button
                  disabled={!(form.title && form.authors && form.description)}
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </form>
            </Columns>
            {books.map((book, index) => (
              <Columns size="md-6" key={index}>
                <Cards
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                />
                <button onClick={() => deleteBook(book.id)}>delete</button>
                <button onClick={()=> loadOneBook(book.id)}>update</button>
              </Columns>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Home;
