import styled  from "@emotion/styled";
import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

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

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ErrorParagraph = styled.p`
  color: red;
  font-weight: 600;
`;

export const JokeText = styled.p`
  font-size: 16px;
  margin: 5px 0;
  font-weight: 600;
`;