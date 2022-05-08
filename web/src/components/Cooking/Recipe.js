import styles from "./Recipe.module.css";
import CookingMethodList from "./CookingMethodsList";
import Card from "../UI/Card";
import { useState } from "react";

const Recipe = (props) => {
  const [name, setName] = useState("Fried Chicken");
  const [recipe, setRecipe] = useState(null);
  const [print, setPrint] = useState(false);
  function getRecipe(val) {
    setRecipe(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }
  return (
    <div>
      <div className="App">
        
        <input
          type="text"
          onChange={getRecipe}
          placeholder="Enter your Recipe Name"
          style={{
            height: "auto",
            width: "auto",
            padding: "5px",
          }}
        />

        <button
          className="ConfirmButton"
          title="Hello"
          style={{
            height: "30px",
            width: "auto",
            margin: "10px",
          }}
          onClick={() => setPrint(true)}
        >
          Create Recipe
        </button>
        {print ? <h1>{recipe}</h1> : null}
      </div>
      <Card className={`${styles["recipe"]}`}>
        <CookingMethodList
          methods={props.methods}
          deleteMethod={props.deleteMethod}
        />
      </Card>
    </div>
  );
};

export default Recipe;
