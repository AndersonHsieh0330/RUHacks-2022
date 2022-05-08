import styles from './NewMethod.module.css'
import { useState } from "react";

const NewMethod = (props) => {
 
    const [enteredMethod, setEnteredMethod] = useState("");
    const [enteredIngredients, setEnteredIngredients] = useState("");
    
  
  
  
    const titleChangeHandler = (event) => {
      setEnteredMethod(event.target.value);
 
    };
    const ingredientsChangeHandler = (event) => {
      setEnteredIngredients(event.target.value);
    };



  const submitHandler = (event) =>{
    event.preventDefault();
    const methodData = {
      method_name:enteredMethod,
      ingredients:enteredIngredients,
      id: Math.random().toString()
    }
   console.log(methodData);
    props.onAddMethod(methodData);
    setEnteredMethod('');
    setEnteredIngredients('');
};


  return (
    <div className={`${styles['new-method']}`}>
    <form onSubmit={submitHandler}>
    <div className={`${styles['new-method__controls']}`}>
      <div className={`${styles['new-method__control']}`}>
        <label>Cooking Method</label>
        <input type="text" value={enteredMethod} onChange={titleChangeHandler} />
      </div>
      <div className={`${styles['new-method__control']}`}>
        <label>Ingredients</label>
        <input
          type="text"
          onChange={ingredientsChangeHandler}
          value={enteredIngredients}
        />
      </div>
    </div>
    <div className={`${styles['new-method__actions']}`}>
      <button type="submit">Add Method</button>
    </div>
  </form>
  </div>
  );
};

export default NewMethod;
