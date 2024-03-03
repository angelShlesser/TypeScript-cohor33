// styles.ts

import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Глобальные стили для всего приложения
export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap');

  body {
    font-family: 'Montserrat', sans-serif; /* Устанавливает шрифт Montserrat для всего тела документа */
  }
`;

// Стили для компонента Homework24Wrapper
export const Homework24Wrapper = styled.div`
  display: flex; /* Устанавливает контейнер как flex-контейнер */
  flex-direction: column; /* Устанавливает направление дочерних элементов по вертикали */
  justify-content: center; /* Выравнивает дочерние элементы по центру по вертикали */
  align-items: center; /* Выравнивает дочерние элементы по центру по горизонтали */
  gap: 25px; /* Устанавливает промежуток между дочерними элементами в 25 пикселей */
  width: 500px; /* Устанавливает ширину контейнера в 500 пикселей */
  height: 300px; /* Устанавливает высоту контейнера в 300 пикселей */
  margin: auto; /* Устанавливает автоматические внешние отступы, чтобы центрировать контейнер */
  padding: 20px; /* Устанавливает внутренний отступ в 20 пикселей */
  border: 1px solid #906363; /* Устанавливает границу с цветом #906363 */
  border-radius: 10px; /* Устанавливает радиус скругления углов в 10 пикселей */
`;

// Стили для заголовка компонента
export const Title = styled.h2`
  font-size: 24px; /* Устанавливает размер шрифта 24 пикселя */
  color: #333; /* Устанавливает цвет текста #333 (темно-серый) */
  margin-bottom: 15px; /* Устанавливает отступ снизу в 15 пикселей */
`;

// Стили для контейнера, содержащего шутку
export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc; /* Устанавливает границу с цветом #ccc (серый) */
  padding: 10px; /* Устанавливает внутренний отступ в 10 пикселей */
  margin-bottom: 10px; /* Устанавливает отступ снизу в 10 пикселей */
`;

// Стили для абзаца с сообщением об ошибке
export const ErrorParagraph = styled.p`
  color: red; /* Устанавливает цвет текста красным */
  font-weight: 600; /* Устанавливает жирное начертание шрифта (600 - полужирный) */
`;

// Стили для текста шутки
export const JokeText = styled.p`
  font-size: 16px; /* Устанавливает размер шрифта 16 пикселей */
  margin: 5px 0; /* Устанавливает внешний отступ сверху и снизу в 5 пикселей */
  font-weight: 600; /* Устанавливает жирное начертание шрифта (600 - полужирный) */
`;
