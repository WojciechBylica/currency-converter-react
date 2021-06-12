import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import DivButtons from "./DivButtons";
import FormShowOrSetCurrencys from "./FormShowOrSetCurrencys";


function App() {
  const [currencys, setCurrencys] = useState([
    {
      id: "PLN",
      name: "PLN",
      value: 1,
    },
    {
      id: "EUR",
      name: "EUR",
      value: 4.45,
    },
    {
      id: "USD",
      name: "USD",
      value: 4.2,
    },
    {
      id: "RUB",
      name: "RUB",
      value: 0.2,
    },
  ]);

  const [hideRates, setHideRates] = useState(true);

  const toggleHideRates = () => {
    setHideRates(hideRates => !hideRates);
  };

  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Form
          currencys={currencys}
          divButtons={<DivButtons
            hideRates={hideRates}
            toggleHideRates={toggleHideRates} />}
        >
        </Form>
        <FormShowOrSetCurrencys
          currencys={currencys}
          hideRates={hideRates}
          setCurrencys={setCurrencys}
          toggleHideRates={toggleHideRates}
        >
        </FormShowOrSetCurrencys>

      </Main>
      <Footer />
    </>
  );
}

export default App;
