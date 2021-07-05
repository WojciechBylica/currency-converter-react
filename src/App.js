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
  const dataFromNBP = useDataFromAPI()

  return (
    <>
      <Container>
        <Header title="Przelicznik walut" />
        {dataFromNBP.status === "loading" &&
          <Messenger
            body="Ładuję kursy walut z Narodowego Banku Polskiego..."
            source={imageLoader}
            alt="imageLoader"
          />
        }
        {dataFromNBP.status === "error" &&
          <Messenger
            body="Coś poszło nie tak... Sprawdź połączenie z internetem i spróbuj ponownie!"
            source={image}
            alt="image"
          />
        }
        {dataFromNBP.status === "success" &&
          <>
            <Main>
              <Clock />
              <Form dataFromNBP={dataFromNBP} />
            </Main>
            <Footer />
          </>
        }
      </Container>
    </>
  );
};
export default App;
