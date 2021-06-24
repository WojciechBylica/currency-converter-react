import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [hideRates, setHideRates] = useState(true);

  const toggleHideRates = () => {
    setHideRates(hideRates => !hideRates);
  };

  return (
    <>
      <Container>
        <Header title="Przelicznik walut" />
        <Main>
          <Clock />
          <Form
            hideRates={hideRates}
            toggleHideRates={toggleHideRates}
          >
          </Form>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default App;
