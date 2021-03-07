import React from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Container from "../Components/Container/Container";
import Wrapper from '../Components/Wrapper/Wrapper'
import Row from "../Components/Row/Row"

const Search = () => {
  return (
    <div>
      <Wrapper>
        <Container>
          <Row>
            <CardHeader
              title="React Google Books Search"
              text="Search for and Save Books of Interest"
            />
          </Row>
          <br />
          <Row>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a Book"
                aria-label="book"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </Row>
          <Row></Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Search;
