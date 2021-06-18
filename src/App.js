import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Div from "./Div";
import Form from "./Form";
import Footer from "./Footer";

function App() {

  const [hideRates, setHideRates] = useState(true);

  const toggleHideRates = () => {
    setHideRates(hideRates => !hideRates);
  };

  const [actualDate, setActualDate] = useState(new Date())

  useEffect(() => {

    setInterval(() => {
      setActualDate(new Date());
    }, 1000);

    return () => {
      clearInterval(setActualDate)
    };
  }, [])

  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Div actualDate={actualDate} />
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
