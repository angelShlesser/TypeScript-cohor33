// EmployeeForm.tsx

import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  EmployeeFormWrapper,
  EmployeeFormContent,
  EmployeeFormField,
  EmployeeFormLabel,
  EmployeeFormInput,
  ShowCardStyle,
  CardItem,
  CardLabel,
  CardValue,
} from "components/EmployeeForm/styles";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    position: "",
    age: "",
  });

  const [showCard, setShowCard] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setEmployee({ ...employee, [field]: e.target.value });
  };

  const handleCreate = () => {
    const { firstName, lastName, position, age } = employee;

    if (firstName && lastName && position && age) {
      setShowCard(true);
      setShowForm(false);
    } else {
      alert("Введите данные сотрудника");
    }
  };

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContent>
        {showForm && (
          <>
            <EmployeeFormField>
              <EmployeeFormLabel>Имя:</EmployeeFormLabel>
              <EmployeeFormInput
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Введите имя"
                value={employee.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
            </EmployeeFormField>
            <EmployeeFormField>
              <EmployeeFormLabel>Фамилия:</EmployeeFormLabel>
              <EmployeeFormInput
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Введите фамилию"
                value={employee.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </EmployeeFormField>
            <EmployeeFormField>
              <EmployeeFormLabel>Должность:</EmployeeFormLabel>
              <EmployeeFormInput
                id="position"
                name="position"
                type="text"
                placeholder="Введите должность"
                value={employee.position}
                onChange={(e) => handleInputChange(e, "position")}
              />
            </EmployeeFormField>
            <EmployeeFormField>
              <EmployeeFormLabel>Возраст:</EmployeeFormLabel>
              <EmployeeFormInput
                id="age"
                name="age"
                type="text"
                placeholder="Введите возраст"
                value={employee.age}
                onChange={(e) => handleInputChange(e, "age")}
              />
            </EmployeeFormField>
            <Button name="Создать" onClick={handleCreate} />
          </>
        )}

        {showCard && (
          <ShowCardStyle>
            <CardItem>
              <CardLabel>Имя:</CardLabel>
              <CardValue>{employee.firstName}</CardValue>
            </CardItem>
            <CardItem>
              <CardLabel>Фамилия:</CardLabel>
              <CardValue>{employee.lastName}</CardValue>
            </CardItem>
            <CardItem>
              <CardLabel>Должность:</CardLabel>
              <CardValue>{employee.position}</CardValue>
            </CardItem>
            <CardItem>
              <CardLabel>Возраст:</CardLabel>
              <CardValue>{employee.age}</CardValue>
            </CardItem>
          </ShowCardStyle>
        )}
      </EmployeeFormContent>
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
