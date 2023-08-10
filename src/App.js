import logo from './logo.svg';
import './App.css';
import React from 'react';

//const [msg,setMsg]=useState("");
// useEffect(()=>{
//   fetch("http://localhost:9000/test")
//   .then((response)=>setMsg(response.text))
// })

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={apiResponce:""};
  }
  callapi(){  
  fetch("http://localhost:9000/test")
  .then((response)=>response.text())
  .then((response)=>this.setState({apiResponce:response}))
}
componentWillMount(){
  this.callapi();
}


render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <center>{this.state.apiResponce}</center>
    </div>
  );
}
}

export default App;
