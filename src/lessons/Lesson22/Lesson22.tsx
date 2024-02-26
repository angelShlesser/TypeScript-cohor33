import {
  PageTitle,
  Lesson22Wrapper,
  ButtonControl,
  ContainerWrapper,
  BlueContainer,
  RedContainer,
  GreedContainer,
} from "./styles";
import Button from "components/Button/Button";

function Lesson22() {
  // 1 способ стилизации: черех импорт styles.css файла - то что мы уже и так используем
  // 2 способ стилизации: inline - в атрибут style передаете ОБЪЕКТ со стилями
  // 3 cпособ стилизации: библиотека. Например: Emotion, styled-components

  return (
    <Lesson22Wrapper>
      {/* <p style={{color: 'blue', fontSize: "30px"}}>Lesson 22</p> */}
      {/* Заголовок страницы с цветом, зависящим от условия isRed */}
      <PageTitle isRed={true}>Lesson 22</PageTitle>

      {/* Контрольные блоки с кнопками */}
      <ButtonControl>
        <Button name="Enter" type="button" />
      </ButtonControl>
      <ButtonControl>
        <Button name="Delete" type="button" isRed={true} />
      </ButtonControl>

      {/* Обертка для контейнеров разных цветов */}
      <ContainerWrapper>
        {/* Зеленый контейнер */}
        <GreedContainer>Green</GreedContainer>
        {/* Красный контейнер */}
        <RedContainer>Red</RedContainer>
        {/* Синий контейнер */}
        <BlueContainer>Blue</BlueContainer>
      </ContainerWrapper>
    </Lesson22Wrapper>
  );
}

export default Lesson22;
