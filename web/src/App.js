import logo from './logo.svg';
import './App.css';
import CookingMethodList from './components/Cooking/CookingMethodsList';
import NewMethod from './components/Cooking/NewMethod';
import Recipe from './components/Cooking/Recipe';
import {useState} from 'react';
import QRCodeGenerator from './components/QRCode/QRCodeGenerator.js';

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

function GetAccessToken(OS_API_KEY, OS_API_SECRET){
  // //openscreen authenticate
// const accessToken = GetAccessToken(OS_API_KEY, OS_API_SECRET);
axios.post(`https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/auth/getAccessToken`, {
    "accessKey": OS_API_KEY,
   "accessSecret": OS_API_SECRET
  },
).then(res => {
     console.log(res.data.token);
    }).catch(error => console.log(error));
    console.log(accessToken)
return ;
} 

function App() {
  const OS_API_KEY = "FybBxfdAZ9tshVCkr2";
  const OS_API_SECRET = "i0rMx21izP3OGslQ5k8iwSYd";
  const OS_PROJECT_ID = "95786b59-0362-4afb-a909-33a641fc8a53";
  const [accessToken, editAccessToken] = useState("")
  const [methods,setMethods] = useState(INITIAL_METHODS);
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
   <Recipe methods={methods} deleteMethod={deleteMethodHandler} />
   <NewMethod onAddMethod={addMethodHandler}/>
   <QRCodeGenerator/>
    <></>
    </div>
  );
}

export default App;
