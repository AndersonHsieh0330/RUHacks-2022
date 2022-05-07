import logo from './logo.svg';
import './App.css';
import CookingMethodList from './components/Cooking/CookingMethodsList';
import NewMethod from './components/Cooking/NewMethod';
import Recipe from './components/Cooking/Recipe';
import {useState} from 'react';

const INITIAL_METHODS = [
  {
    id: "e1",
    name: "Toilet Paper",
    ingredients: "crab, lobster, fish"
   
  },
  { id: "e2", name: "New TV",  ingredients: "crab, lobster, fish" },
  {
    id: "e3",
    name: "Car Insurance",
    ingredients: "crab, lobster, fish",
  },
  {
    id: "e4",
    name: "New Desk (Wooden)",
    ingredients: "crab, lobster, fish",
  },
];


function App() {
  const [methods,setMethods] = useState(INITIAL_METHODS);
  const [name, setName] = useState('Fried Chicken');
  const addMethodHandler = (newMethodData) =>{
    setMethods((prevMethods)=>{
       return [...methods,newMethodData];
    });
  }

  const deleteMethodHandler = (methodId) =>{
    console.log('bob')
    setMethods((prevMethods)=>{
      return methods.filter(method=>method.id!=methodId);
    })
  }
  
  return (
    <div>
   <Recipe methods={methods} deleteMethod={deleteMethodHandler} recipeName={name}/>
   <NewMethod onAddMethod={addMethodHandler}/>

    </div>
  );
}

export default App;
