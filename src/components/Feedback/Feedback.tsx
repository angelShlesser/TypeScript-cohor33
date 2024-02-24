import { Like } from "../../assets";
import { FeedbackProbs } from "./types";

import Button from "../Button/Button";

import "./styles.css";

function Feedback({
  onLike,
  likes,
  onDislike,
  dislikes,
  resetResults,
}: FeedbackProbs) {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          {/* <Button name="Like" onClick={onLike} /> */}
          <div onClick={onLike} className="image-control">
            <img className="image" src={Like} alt="Like img" />
          </div>
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
