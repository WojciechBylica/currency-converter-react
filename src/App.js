import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock";
import Form from "./Form";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import { useDataFromAPI } from "./useDataFromAPI";

function App() {
  const {
    dataFromAPI,
  } = useDataFromAPI()

  return (
    <>
      <Container>
        <Header title="Przelicznik walut" />
        <Main>
          <Clock />
          {
            dataFromAPI.status === "loading" &&
            <Loader />
          }
          {
            dataFromAPI.status === "success" &&
            <Form dataFromAPI={dataFromAPI} />
          }
          {
            dataFromAPI.status === "error" &&
            <Error />
          }
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default App;
