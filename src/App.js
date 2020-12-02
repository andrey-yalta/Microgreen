import './App.css';
import {Home} from "./Components/Home/Home";
import {Route} from "react-router-dom";
import {Shop} from "./Components/Shop/Shop";
import {Cart} from "./Components/Cart/Cart";
import {About} from "./Components/About/About";
import {Contacts} from "./Components/Contacts/Contacts";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Home/Footer";
import React from "react";

function App() {
  return (
    <div className="App">
        <Header/>
        <Route path={"/"} render={ ()=><Home/> } exact/>
        <Route path={"/shop"} render={ ()=><Shop/> }/>
        <Route path={"/cart"} render={ ()=><Cart/> }/>
        <Route path={"/about"} render={ ()=><About/> }/>
        <Route path={"/contacts"} render={ ()=><Contacts/> }/>
        <Footer/>
    </div>
  );
}

export default App;
