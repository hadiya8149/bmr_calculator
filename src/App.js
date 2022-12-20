import React from "react"
import './App.css';
import {Component} from"react"
import Navbar from "./components/navbar"
import About from "./components/about";
import CalcForm from "./components/Cal2bmr";
import Result from "./components/result";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      apiResponse:"res not found"
    };
  };
  callAPI(){
    fetch("http://localhost:9000/calculate_bmr.js")
      .then(res=> res.text())
      .then(res=>this.setState({apiResponse:res}))
      .catch(err=> err);
  };
  componentDidMount(){
    this.callAPI();
  }
  render(){
  return (
    <div className="App">
      
      
      <Navbar />
      <div className="logo">
        Cal2
      </div>
      <About/>
      <CalcForm />
      <Result />

    </div>
  );
}
}
export default App;
