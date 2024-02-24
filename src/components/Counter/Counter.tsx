import { useState } from "react";
import { CounterProbs } from "./types";

import "./styles.css";

import Button from "../Button/Button";

function Counter({ count, onMinus, onPlus }: CounterProbs) {
  // Создаем state для likes
  const [likes, setLikes] = useState<number>(0);
  // Создаем state для dislikes
  const [dislikes, setDislikes] = useState<number>(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  const onLike = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет увеличивать dislikes на 1
  const onDislike = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  // Создаем функцию, которая будет сбрасывать все результаты
  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
