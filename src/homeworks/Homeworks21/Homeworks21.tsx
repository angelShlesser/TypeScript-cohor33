import { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import Input from "../../components/Input/Input";
import LoginForm from "../../components/LoginForm/LoginForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
function Homeworks21() {
  const sampleProfileData = {
    src: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    firstName: "Homer",
    lastName: "Simpson",
    career: "Nuclear Safety Inspector",
    hairColor: "Black",
    hobby: "Drink beer Duff",
  };
  return (
    <div>
      {/* <Feedback
        onLike={onLike}
        likes={likes}
        onDislike={onDislike}
        dislikes={dislikes}
        resetResults={resetResults}
      /> */}
      {/* <Input
        id="exampleId"
        name="exampleName"
        placeholder="Enter..."
        label="name"
        type="text"
      /> */}
      {/* <LoginForm /> */}
      <ProfileCard
        profileData={sampleProfileData}
        imgSrc={sampleProfileData.src}
      />
    </div>
  );
}

export default Homeworks21;
