import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import DivButtons from "./DivButtons";
import FormShowOrSetCurrencies from "./FormShowOrSetCurrencies";


function App() {
  const [currencies, setCurrencies] = useState([
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

  const [newCurrencyValue, setNewCurrencyValue] = useState();

  const toggleCurrencyValue = (id) => {
    setCurrencies(currencies => currencies.map(currency => {
      if (currency.id === id) {
        return { ...currency, value: newCurrencyValue };
      }

      return currency;
    }));
  };

  const [hideRates, setHideRates] = useState(true);

  const toggleHideRates = () => {
    setHideRates(hideRates => !hideRates);
  };


  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Form
          currencies={currencies}
          divButtons={<DivButtons hideRates={hideRates} toggleHideRates={toggleHideRates} />}
        >
        </Form>
        <FormShowOrSetCurrencies
          setNewCurrencyValue={setNewCurrencyValue}
          toggleCurrencyValue={toggleCurrencyValue}
          currencies={currencies}
          hideRates={hideRates}
          toggleHideRates={toggleHideRates}
        >
        </FormShowOrSetCurrencies>

      </Main>
      <Footer />
    </>
  );
}

export default App;
