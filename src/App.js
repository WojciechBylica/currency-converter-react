import React from 'react';
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Container>
        <Header title="Przelicznik walut" />
        <Main>
          <Clock />
          <Form />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default App;
