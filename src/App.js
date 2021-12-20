import './App.css';
import RecipeRender from './RecipeRender/RecipeRender';
import { useState } from "react";
import Axios from 'axios';

function App() {

  
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = "7fa42acc";
  const YOUR_APP_KEY = "4107ac68faae0b1d8d5ea6fe856285cc";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
      // promise
      var result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // prevent app from reloading
    getRecipeInfo();
  }

  return (
    <div className="App">

      <header
        className="jumbotron text-left"
        style={{ backgroundColor: "#2F4746" }}
      >
        <img src="assets/logo.png" alt="logo" height="50px"></img>
        
        <h1>
          <u>Food Recipe Hub</u>🥗
        </h1>

      </header>

      <form className="app__searchForm" onSubmit={onSubmit }>
        <input
          type="text"
          placeholder="ingredient"
          autoComplete="off"
          className="app__input"
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}
        />

        <select className="app__healthLabels">
          <option 
            value="vegan" 
            onClick={ () => {
              setHealthLabel("vegan")
            }}
          >
            vegan
          </option>

          <option 
            value="vegetarian" 
            onClick={ () => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>

          <option 
            value="low-sugar" 
            onClick={ () => {
              setHealthLabel("low-sugar");
            }
          }>
            low-sugar
          </option>

          <option 
            value="dairy-free" 
            onClick={ () => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>

          <option 
            value="immuno-supportive" 
            onClick={ () => {
              setHealthLabel("immuno-supportive");
            }}
          >
            vegan
          </option>

          <option 
            value="wheat-free" 
            onClick={ () => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>

        {/* <input */}
        <button
          type="submit"
          // value="Get Recipe"
          className="app__submit"
          onClick={getRecipeInfo}
        >
          Get Recipe
        </button>

        <div className="app__recipes">
          {recipes.map((recipe, idx) => {
            return (
              <RecipeRender
                key={idx}
                recipe={recipe}
              />
            );
          })}
        </div>


        {/* <button>
          get recipe
        </button> */}

      </form>
    </div>
  );
}

export default App;
