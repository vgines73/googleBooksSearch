import React from "react";
import CardHeader from "../Components/CardHeader/CardHeader";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Wrapper from "../Components/Wrapper/Wrapper";

const Saved = () => {
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
          <Row>
            
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Saved;
