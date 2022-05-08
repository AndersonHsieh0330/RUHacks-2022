import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout.js';


// function GetAccessToken(OS_API_KEY, OS_API_SECRET){
//   // //openscreen authenticate
//   // const accessToken = GetAccessToken(OS_API_KEY, OS_API_SECRET);
//   axios.post(`https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/auth/getAccessToken`, {
//       "accessKey": OS_API_KEY,
//     "accessSecret": OS_API_SECRET
//     },
//   ).then(res => {
//       console.log(res.data.token);
//       }).catch(error => console.log(error));
//       console.log(accessToken)
//   return ;
// } 

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      recipe: [],
      isLoaded:false
    };
  };

  componentDidMount(){
    fetch('http://localhost:3000/6276d9f0be4b8f3c23f9f427')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render(){
    var {isLoaded,items}=this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{
      return(
        <div className='App'>
          <Layout data={this.state}/>
        </div>
      );
    }
  }
}

export default App;
