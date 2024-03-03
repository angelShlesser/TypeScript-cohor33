import { useState, useEffect } from "react";
import {Container, Homework24Wrapper, ErrorParagraph} from "./style"

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
  <Homework24Wrapper>
      <h2>Random Joke</h2>
      {error && <ErrorParagraph>{error}</ErrorParagraph>}
      {joke && (
        <Container>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </Container>
      )}
      <button onClick={handleButtonClick}>Получить новую шутку</button>
    </Homework24Wrapper>
  );
};

export default Homework24;
