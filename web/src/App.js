import logo from './logo.svg';
import './App.css';
import CookingMethodList from './components/Cooking/CookingMethodsList';
import NewMethod from './components/Cooking/NewMethod';
import Recipe from './components/Cooking/Recipe';
import {useState} from 'react';
//import QRCodeGenerator from './components/QRcode/QRcodeGenerator.js';
import axios from 'axios';




function GetAccessToken(OS_API_KEY, OS_API_SECRET){

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

  //openscreen authenticate
  const accessToken = GetAccessToken(OS_API_KEY, OS_API_SECRET);

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
