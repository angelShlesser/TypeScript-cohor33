// styles.ts

import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const EmployeeFormContent = styled.div`
  width: 590px;
  height: 592px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 60px;
  border: 1px solid;
`;

export const EmployeeFormField = styled.div`
  margin-bottom: 20px; /* добавлен отступ между полями формы */
`;

export const EmployeeFormLabel = styled.p`
  margin-bottom: 5px; /* добавлен отступ между меткой и вводом */
  font-size: 18px; /* установлен размер шрифта */
`;

export const EmployeeFormInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const ShowCardStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;
`;

export const CardItem = styled.div`
  margin-bottom: 10px; /* добавлен отступ между элементами карточки */
    padding: 0 15px;
`;

export const CardLabel = styled.p`
  margin-bottom: 5px; /* добавлен отступ между меткой и значением */
  font-size: 18px; /* установлен размер шрифта */
`;

export const CardValue = styled.h2`
  font-size: 24px; /* установлен размер шрифта */
`;
