import React, { useState } from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Container from "../Components/Container/Container";
import Wrapper from "../Components/Wrapper/Wrapper";
import Row from "../Components/Row/Row";
import Cards from "../Components/Cards/Cards";
import image from "../Components/images/books.jpg";
import Hero from "../Components/Hero/Hero";
import axios from "axios";
import API from "../utils/API";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  // handles the changes in input
  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  // form submittal
  const submit = async (e) => {
    e.preventDefault();
    console.log(query);
    try {
      const result = await API.getBook(query);
      console.log(result);
      const modifyResult = result.data.items.map((item) => {
        item = item.volumeInfo;
        return {
          title: item.title ? item.title : "no title for book",
          authors: item.authors ? item.authors : ["no authors"],
          description: item.description ? item.description : "no description",
          image: item.imageLinks
            ? item.imageLinks.thumbnail
            : `https://via.placeholder.com/300.png/09f/fff

          C/O https://placeholder.com/`,
          link: item.infoLink ? item.infoLink : "no link available",
        };
      });
      setBooks(modifyResult);
    } catch (error) {
      console.log(error);
    }
    return;
  };

  const handleSaveBook = async (e) => {
    const dataValue = e.target.getAttribute("data-value");
    const saveOneBook = books[dataValue];
    console.log(saveOneBook);

    try {
      const searchResult = await axios.post("/api/books", saveOneBook);
      console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <Hero backgroundImage={image} />
          </Row>
          <Row>
            <CardHeader
              title="React Google Books Search"
              text="Search for and Save Books of Interest"
            />
          </Row>
        </Container>

        <br />
        <Container>
          <Row>
            <form onSubmit={submit}>
              <div className="input-group mb-3">
                <input
                  onChange={onChange}
                  type="text"
                  name="book"
                  className="form-control"
                  placeholder="Search for a Book by Title or Author"
                  aria-label="book"
                  aria-describedby="button-addon2"
                />
                <button
                  onChange={onChange}
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                  value="search"
                >
                  search
                </button>
              </div>
            </form>
          </Row>
          <Row>
            {books.map((book, index) => {
              console.log(index, book);
              return (
                <Cards
                  key={index}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  handleSaveBook={handleSaveBook}
                  index={index}
                />
              );
            })}
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Search;
