import React,{Fragment} from "react";
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import './App.css';

const App =()=> {
  return (
    <Fragment>
        <Navbar  />
        <Landing />
        <Login/>
    </Fragment>
  );
}

export default App;
