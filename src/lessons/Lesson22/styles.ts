// Стили в файле styles.ts
import styled from "@emotion/styled";

// Интерфейс для свойства isRed в PageTitle
interface PageTitlePropps {
  isRed: boolean;
}

// Общая обертка для компонента Lesson22
export const Lesson22Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px; // Отступ между дочерними элементами
`;

// Заголовок страницы с возможностью изменения цвета
export const PageTitle = styled.p<PageTitlePropps>`
  color: ${({ isRed }) => (isRed ? "red" : "blue")};
  font-size: 30px;
`;

// Контейнер для кнопок
export const ButtonControl = styled.div`
  width: 300px;
`;

// Обертка для контейнеров разных цветов
export const ContainerWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

// Общий стиль для контейнеров
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
  color: white;
`;

// Контейнер с синим фоном
export const BlueContainer = styled(Container)`
  background-color: blue;
`;

// Контейнер с зеленым фоном
export const GreedContainer = styled(Container)`
  background-color: green;
`;

// Контейнер с красным фоном
export const RedContainer = styled(Container)`
  background-color: red;
`;
