import React, { useState } from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Container from "../Components/Container/Container";
import Wrapper from "../Components/Wrapper/Wrapper";
import Row from "../Components/Row/Row";
// import Cards from "../Components/Cards/Cards"
import image from "../Components/images/books.jpg";
import Hero from "../Components/Hero/Hero";
import axios from "axios";

const Search = () => {
  const [form, setForm] = useState({});

  // handles the changes in input
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // form submittal
  const submit = async (e) => {
    e.preventDefault();

    try {
      const searchResult = await axios.post("/saved", {
        book: form.book,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Wrapper>
        <Row>
          <Hero backgroundImage={image} />
        </Row>

        <Row>
          <CardHeader
            title="React Google Books Search"
            text="Search for and Save Books of Interest"
          />
        </Row>
        <br />
        <Container>
          <Row>
            <div className="input-group mb-3">
              <form onSubmit={submit}>
                <input
                  onChange={onChange}
                  type="text"
                  name="book"
                  className="form-control"
                  placeholder="Search for a Book"
                  aria-label="book"
                  aria-describedby="button-addon2"
                />
                <input
                  onChange={submit}
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                  value="search"
                />
              </form>
            </div>
          </Row>
          {/* <Row>
            {props.books.map((book, index) => (
              <Cards
                key={index}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            ))}
          </Row> */}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Search;
