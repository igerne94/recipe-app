import React from "react";
import "./style.css";

function RecipeRender ({ recipe }) {
  return (
    // support any images formats:
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeRender">
        <img
          className="recipeRender__image"
          src={recipe["recipe"]["image"]}
          alt="pic"
          onClick={
            () => window.open(recipe["recipe"]["url"])
          }
        />
          <p className="recipeRender__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}

export default RecipeRender;
