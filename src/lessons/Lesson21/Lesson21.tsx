import "../../components/Counter/Counter";

function Lesson21() {
  // 6. null и undefined
  let someValue: undefined = undefined;
  let emptyValue: null = null;

  // 7. Типизация функций
  // 7.1 Если функция ничего не возвращает
  // 1 способ
  // const someFunction1 = (): void => {
  //     console.log("Hello World!")
  // };
  // 2 способ
  // const someFunction1: () => void = () => {
  //     console.log("Hello World!")
  // };

  // 7.2 Если функция возвращает что-то
  // Пример функции, складывающей числа
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };

  // Пример функции, возвращающей объект
  const createPerson = (
    name: string,
    age: number
  ): { name: string; age: number } => {
    return { name, age };
  };

  // 8. Тип any может быть любым
  let value: any = "Some value";
  value = 3;
  value = [1, 2, 3, 4, 5];

  // Пример использования типа any
  const exampleAny = (arg: any): any => {
    return arg;
  };

  // 9. enum
  enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  // Пример использования enum
  const today = DayOfWeek.Wednesday;
  console.log("Today is:", today);

  // Объявление enum
  enum Season {
    Winter = "Winter",
    Spring = "Spring",
    Summer = "Summer",
    Autumn = "Autumn",
  }
  // Функция, использующая enum с оператором switch
  const getSeasonDescription = (season: Season): string => {
    switch (season) {
      case Season.Winter:
        return "It's cold!";
      case Season.Spring:
        return "Flowers are blooming.";
      case Season.Summer:
        return "Enjoy the sunshine!";
      case Season.Autumn:
        return "Leaves are falling.";
      default:
        return "Unknown season";
    }
  };

  // Пример использования
  const currentSeason: Season = Season.Summer;
  const seasonDescription: string = getSeasonDescription(currentSeason);
  console.log(seasonDescription); // Вывод: "Enjoy the sunshine!"

  // Определение перечисления для животных
  enum Animal {
    Dog = "Собака",
    Cat = "Кошка",
    Elephant = "Слон",
  }
  // Пример использования enum со строковыми значениями
  const myPet = Animal.Dog;
  console.log("My pet is:", myPet);

  // Определение перечисления для цветов
  enum Color {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF",
  }
  // Пример использования enum с числовыми значениями
  const primaryColor = Color.Red;
  console.log("Primary color is:", primaryColor);

  // Определение перечисления для результатов игры
  enum GameResult {
    Win = "Победа",
    Draw = "Ничья",
    Lose = "Поражение",
  }
  // Пример использования enum со строковыми значениями
  const result = GameResult.Win;
  console.log("Game result:", result);

  // 9. Типизация объектов: interface и type
  // 9.1 interface
  interface User {
    name: string;
    age: number;
    job: string;
    isActive?: boolean; // Опциональное свойство
  }

  interface User_Additional extends User {
    isManager: boolean;
  }

  const user: User = {
    name: "Job",
    age: 40,
    job: "QA",
  };

  const user1: User_Additional = {
    name: "John",
    age: 33,
    job: "QA",
    isActive: true,
    isManager: false,
  };

  // 9.2 type
  type AnimalSkils = {
    name: string;
    color: string;
  };

  // type нельзя наследовать.

  type AnimalAdditional = {
    isWild: boolean;
  };

  type Colors = "Black";

  const colors: Colors = "Black";

  const animals: AnimalSkils = {
    name: "Cat",
    color: "red",
  };

  // 10. или в ts

  type CustomType = string | undefined | null;
  let someDataFromServer: CustomType = undefined;
  someDataFromServer = "Some data";
  someDataFromServer = null;
  //   someDataFromServer = 3; // будет ошибка

  return <div>Lesson21: TypeScript is JavaScript</div>;
}

export default Lesson21;
