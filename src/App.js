import React, { useEffect, useState } from 'react';
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

  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
  const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId)
    };
  }, [])

  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Clock date={currentDate} />
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
