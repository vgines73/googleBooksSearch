import React, { useState, useContext, useEffect } from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Container from "../Components/Container/Container";
import Wrapper from "../Components/Wrapper/Wrapper";
import Row from "../Components/Row/Row";
import Cards from "../Components/Cards/Cards"
import image from "../Components/images/books.jpg";
import Hero from "../Components/Hero/Hero";
import axios from "axios";
import UserContext from "../Components/UserContext/UserContext";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  const [form, setForm] = useState({});
  const history = useHistory();

  // handles the changes in input
  const onChange = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value });
  };

  // form submittal
  const submit = async (e) => {
    e.preventDefault();

    try {
      const searchResult = await axios.post("/saved", {
        book: form.book,
      });

      setUserData({
        book: searchResult.data,
      });
      localStorage.setItem("usersBooks", searchResult.data);
      history.pushState("/");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userData.book) history.pushState("/");
  }, [userData.book, history]);

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
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                  value="submit"
                />
                  Search
              
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
