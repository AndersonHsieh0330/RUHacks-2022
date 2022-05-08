import React, { useState, useEffect, useContext } from 'react';
import CookingMethodList from '../Cooking/CookingMethodsList';
import NewMethod from '../Cooking/NewMethod.js';
import Recipe from '../Cooking/Recipe';
import QRCodeGenerator from '../QRCode/QRCodeGenerator.js';

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

const Layout = (props) => {
  const OS_API_KEY = "FybBxfdAZ9tshVCkr2";
  const OS_API_SECRET = "i0rMx21izP3OGslQ5k8iwSYd";
  const OS_PROJECT_ID = "95786b59-0362-4afb-a909-33a641fc8a53";
  const [accessToken, editAccessToken] = useState("");
  const [methods,setMethods] = useState(INITIAL_METHODS);
  console.log(props);

  return (
    <div>
      <Recipe methods={methods} deleteMethod={deleteMethodHandler} />
      <NewMethod onAddMethod={addMethodHandler}/>
      <QRCodeGenerator/>
      <></>
    </div>
  );
}

const addMethodHandler = (newMethodData) =>{
  setMethods((prevMethods)=>{
      return [...methods,newMethodData];
  });
};

const deleteMethodHandler = (methodId) =>{
  console.log('bob')
  setMethods((prevMethods)=>{
    return methods.filter(method=>method.id!=methodId);
  })
};

export default Layout;