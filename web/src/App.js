import logo from './logo.svg';
import './App.css';
import CookingMethodList from './components/Cooking/CookingMethodsList';
function App() {

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

  return (
    <div>
   <CookingMethodList methods={INITIAL_METHODS} />
    </div>
  );
}

export default App;
