import React from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Cards from "../Components/Cards/Cards";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";

const Saved = (props) => {
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
            <Row>
              <Cards
                key={index}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            </Row>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

export default Saved;
