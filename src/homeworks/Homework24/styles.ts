// styles.ts

import styled from "@emotion/styled";

// Стили для компонента Homework24Wrapper
export const Homework24Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 500px;
  height: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #906363;
  border-radius: 10px;
`;

// Стили для заголовка компонента
export const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

// Стили для контейнера, содержащего шутку
export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

// Стили для абзаца с сообщением об ошибке
export const ErrorParagraph = styled.p`
  color: red;
  font-weight: 600;
`;

// Стили для текста шутки
export const JokeText = styled.p`
  font-size: 16px;
  margin: 5px 0;
  font-weight: 600;
`;
