import React from "react"

import './App.css';
import {Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Component} from"react"
import Navbar from "./components/navbar"
import CalcForm from "./components/Cal2bmr";
import Login from "./components/login"
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
    <Router>
      <Navbar />
      <div className="logo">
        Cal2
      </div>
      <Routes>
        <Route index path='' element={<CalcForm/>}></Route>
        <Route  path='/login'  element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
}
export default App;
