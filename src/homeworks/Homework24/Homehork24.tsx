import { useState, useEffect } from "react";
import {
  Container,
  Homework24Wrapper,
  ErrorParagraph,
  Title,
  JokeText,
} from "./styles";
import Button from "components/Button/Button";
import { Joke } from "./type";

function Homework24() {
  // Состояния для хранения полученной шутки, ошибки и флага загрузки
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  // Функция для отправки запроса на получение шутки
  const getJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();

      if (!response.ok) {
        // Если ответ сервера не успешен, генерируем ошибку
        throw new Error("API Error");
      } else {
        // Если успешно, обновляем state с шуткой и сбрасываем ошибку
        setJoke(result);
        setError(undefined);
      }
    } catch (error) {
      // В случае ошибки при запросе, обновляем state с ошибкой и сбрасываем шутку
      setJoke(undefined);
      setError("Ошибка при получении данных");
    }
  };

  // Эффект, вызываемый при первичной загрузке компонента
  useEffect(() => {
    console.log("Загрузка информации");
    getJoke();
    // Убираем алерт при первичной загрузке
    // alert("Загрузка информации");
  }, []);

  // Обработчик клика по кнопке для получения новой шутки
  const handleButtonClick = () => {
    getJoke();
    // Показываем алерт при нажатии кнопки
    alert("Вы получили новую шутку");
  };

  return (
    <>
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
        <Button name="Get new joke" onClick={handleButtonClick} />
      </Homework24Wrapper>
    </>
  );
}

export default Homework24;
