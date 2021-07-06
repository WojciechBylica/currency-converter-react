import Header from "./Header";
import Main from "./Main";
import Clock from "./Clock";
import Form from "./Form";
import Messenger from "./Messenger";
import { useDataFromAPI } from "./useDataFromAPI";
import imageLoader from "./images/imageLoader.gif";
import image from "./images/image.png";
import { StyledDiv, StyledFooter } from "./styled";

function App() {
  const ratesData = useDataFromAPI()

  return (
    <>
      <StyledDiv>
        <Header title="Przelicznik walut" />
        {ratesData.status === "loading" &&
          <Messenger
            body="Ładuję kursy walut z Narodowego Banku Polskiego..."
            source={imageLoader}
            alt="imageLoader"
          />
        }
        {ratesData.status === "error" &&
          <Messenger
            body="Coś poszło nie tak... Sprawdź połączenie z internetem i spróbuj ponownie!"
            source={image}
            alt="image"
          />
        }
        {ratesData.status === "success" &&
          <>
            <Main>
              <Clock />
              <Form ratesData={ratesData} />
            </Main>
            <StyledFooter>Designed by Wojciech Bylica Arts</StyledFooter>
          </>
        }
      </StyledDiv>
    </>
  );
};
export default App;
