import React, { useState } from 'react';
import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";

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
          setNewCurrencyValue={setNewCurrencyValue}
          toggleCurrencyValue={toggleCurrencyValue}
          hideRates={hideRates}
          toggleHideRates={toggleHideRates}
          currencies={currencies}
        >
        </Form>
      </Main>
      <Footer />
    </>
  );
}

export default App;
