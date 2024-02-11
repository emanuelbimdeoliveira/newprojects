import { useState } from "react";

import { descriptionArray } from "../mini_db/db";

type skill = {
  title: string;
  description: string;
};

export const useHandleShowSkill = () => {
  const [skillDescription, setSkillDescription] = useState<undefined | skill>(
    descriptionArray[descriptionArray.length - 1]
  );

  const handleShowSkill = () => {
    const icons = document.querySelectorAll(".skills article i");
    const skillsSection = document.querySelector("#skills");

    icons!.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        setSkillDescription(descriptionArray[index]);
      });
      item.addEventListener("click", () => {
        setSkillDescription(descriptionArray[index]);
      });
    });
    skillsSection!.addEventListener("mouseleave", () => {
      setSkillDescription(descriptionArray[descriptionArray.length - 1]);
    });
  };
  return { handleShowSkill, skillDescription };
};
