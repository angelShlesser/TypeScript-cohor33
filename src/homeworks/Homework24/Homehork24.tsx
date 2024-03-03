import { useState, useEffect } from "react";
import { Container, Homework24Wrapper, ErrorParagraph, Title, JokeText, GlobalStyles } from "./styles";
import Button from "components/Button/Button";
import { Global } from "@emotion/react";
import { Joke } from "./type";

function Homework24() {
  // State для хранения полученной шутки и ошибки
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Функция для отправки запроса на получение шутки
  const getJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const result = await response.json();

      if (!response.ok) {
        // Если ответ сервера не успешен, генерируем ошибку
        throw new Error("API Error");
      } else {
        // Если успешно, обновляем state с шуткой и сбрасываем ошибку
        setJoke(result);
        setError(null);
      }
    } catch (error) {
      // В случае ошибки при запросе, обновляем state с ошибкой и сбрасываем шутку
      setJoke(null);
      setError("Ошибка при получении данных");
    }
  };

  // Эффект, вызываемый при первичной загрузке компонента
  useEffect(() => {
    getJoke();
  }, []);

  // Обработчик клика по кнопке для получения новой шутки
  const handleButtonClick = () => {
    getJoke();
  };

  // Эффект, реагирующий на изменения в state с шуткой или ошибкой
  useEffect(() => {
    // Выводит алерт в случае получения новой шутки или ошибки
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

      {/* Рендер компонентов с использованием стилей */}
      <Homework24Wrapper>
        <Title>Random Joke</Title>
        {error && <ErrorParagraph>{error}</ErrorParagraph>}
        {joke && (
          <Container>
            <JokeText>{joke.setup}</JokeText>
            <JokeText>{joke.punchline}</JokeText>
          </Container>
        )}
        {/* Кнопка для запроса новой шутки */}
        <Button name="Get a new joke" onClick={handleButtonClick} />
      </Homework24Wrapper>
    </>
  );
}

export default Homework24;
