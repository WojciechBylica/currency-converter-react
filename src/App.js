import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock";
import Form from "./Form";
import Footer from "./Footer";
import Messenger from "./Messenger";
import { useDataFromAPI } from "./useDataFromAPI";
import imageLoader from "./images/imageLoader.gif";
import image from "./images/image.png";

function App() {
  const dataFromAPI = useDataFromAPI()

  return (
    <>
      <Container>
        <Header title="Przelicznik walut" />
        {dataFromAPI.status === "loading" &&
          <Messenger
            body="Ładuję kursy walut z Europejskiego Banku Centralnego..."
            source={imageLoader}
            alt="imageLoader"
          />
        }
        {dataFromAPI.status === "error" &&
          <Messenger
          body="Coś poszło nie tak... Sprawdź połączenie z internetem i spróbuj ponownie!"
          source={image}
          alt="image"
        />
        }
        {dataFromAPI.status === "success" &&
          <>
            <Main>
              <Clock />
              <Form dataFromAPI={dataFromAPI} />
            </Main>
            <Footer />
          </>
        }
      </Container>
    </>
  );
};
export default App;
