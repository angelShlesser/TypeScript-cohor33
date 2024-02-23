function Lesson20() {
  // 1. тип string: Типизация строк - строки все что идет в дв-х, одинарных, литеральных кавычках
  let someString: string = "This is string";
  console.log(someString);
  someString = "This is changed string";
  console.log(someString);
  // someString = 5; // так делать нельзя - будет ошибка т.к 5 - это число, а someString - имеет тип данных string
  // let someString2: string = 10; - // так тоже делать нельзя - будет ошибка

  // 2 тип number
  let someNumber: number = 30; // number может быть с плавующей точкой
  // someNumber = 30 + "5" будет ошибка, т.к "5" - это строка
  let numberWithDot: number = 100.375;

  // 3 тип - boolean - только false или true
  let isActive: boolean = true;
  isActive = false;

  // 4 тип массивы - string[]
  const animals: string[] = ["Cat", "Dog", "Lion"];
  const numbers: number[] = [2, 3, 1];
  animals.push("Fly");
  // animals.push(1000) в String только строчки.
  const number2 = [1, 2, 3, 4, 5];

  // 4.1 тип tupel - [string, number] -позволяет создать массив фиксированной длины, с определенным типом данных. Важен порядок.
  let arrayWithDifferentTypes: [string, string, number, boolean] = [
    "name",
    "John",
    3,
    false,
  ];

  return <div>Lesson 20</div>;
}

export default Lesson20;
