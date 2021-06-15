import React, { useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";

function App() {

  const [hideRates, setHideRates] = useState(true);

  const toggleHideRates = () => {
    setHideRates(hideRates => !hideRates);
  };

  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Form
          hideRates={hideRates}
          toggleHideRates={toggleHideRates}
        >
        </Form>
      </Main>
      <Footer />
    </>
  );
}

export default App;
