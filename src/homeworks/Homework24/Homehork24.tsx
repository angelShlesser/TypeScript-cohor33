import { useState, useEffect } from "react";
import {Container, Homework24Wrapper, ErrorParagraph, Title, JokeText, GlobalStyles} from "./styles"
import Button from "components/Button/Button";
import { Global } from "@emotion/react";

interface Joke {
  setup: string;
  punchline: string;
}

function Homework24() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const result = await response.json();

      if (!response.ok) {
        throw new Error("API Error");
      } else {
        setJoke(result);
        setError(null);
      }
    } catch (error) {
      setJoke(null);
      setError("Ошибка при получении данных");
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  const handleButtonClick = () => {
    getJoke();
  };

  useEffect(() => {
    if (joke) {
      alert("Вы получили новую шутку");
    } else if (error) {
      alert("Ошибка при получении данных");
    }
  }, [joke, error]);

  return (
    <>
      {/* Применяем глобальные стили к корневому элементу компонента */}
      <Global styles={GlobalStyles} />

      {/* Остальные компоненты с использованием стилей */}
      <Homework24Wrapper>
        <Title>Random Joke</Title>
        {error && <ErrorParagraph>{error}</ErrorParagraph>}
        {joke && (
          <Container>
            <JokeText>{joke.setup}</JokeText>
            <JokeText>{joke.punchline}</JokeText>
          </Container>
        )}
        <Button name="Get a new joke" onClick={handleButtonClick} />
      </Homework24Wrapper>
    </>
  );
};

export default Homework24;
