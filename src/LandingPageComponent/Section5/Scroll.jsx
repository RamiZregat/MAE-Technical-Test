import React from "react";
import fork from "../../Assets/fork.png";

export default function Scroll() {
  const recipesCounterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="scrollContainer d-flex flex-column gap-4">
      {recipesCounterArr.map((num) => (
        <div key={num} className="recipeTypeLayout">
          <div className="recipeType p-3 d-flex gap-4 align-items-center">
            <div className="recipesTypeIconContainer">
              <img className="recipesTypeIcon" src={fork} alt="" />
            </div>
            <span className="recipeTypeTitle">Breakfast Recipes</span>
          </div>
        </div>
      ))}
    </div>
  );
}
