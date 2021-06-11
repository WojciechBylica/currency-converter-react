import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Form from "./Form";
import Label from "./Label";
import LabelWithInput from "./LabelWithInput";
import DivButtons from "./DivButtons";
import LabelShowOrSetCurrencys from "./LabelShowOrSetCurrencys";
import Results from "./Results";

function App() {
  const currencys = [
    {
      name: "PLN",
      value: 1,
    },
    {
      name: "EUR",
      value: 4.45,
    },
    {
      name: "USD",
      value: 4.2,
    },
    {
      name: "RUB",
      value: 0.2,
    },
  ];


  return (
    <>
      <Header title="Przelicznik walut" />
      <Main>
        <Form
          label={
            <>
              <Label title="Wybierz walutę do przeliczenia:" currencys={currencys} />
              <Label title="Wybierz walutę do przeliczenia:" currencys={currencys} />
            </>
          }
        >
        </Form>
        <Form
          label={<LabelWithInput />}
          divButtons={<DivButtons />}
        >
        </Form>
        <Results />
        <Form
          label={<LabelShowOrSetCurrencys currencys={currencys} />}
        >
        </Form>
      </Main>
      <Footer />
    </>
  );
}

export default App;
