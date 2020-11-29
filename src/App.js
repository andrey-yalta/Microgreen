import './App.css';
import {Home} from "./Components/Home/Home";
import {Route} from "react-router-dom";
import {Shop} from "./Components/Shop/Shop";
import {Cart} from "./Components/Cart/Cart";
import {About} from "./Components/About/About";

function App() {
  return (
    <div className="App">
        <Route path={"/"} render={ ()=><Home/> } exact/>
        <Route path={"/shop"} render={ ()=><Shop/> }/>
        <Route path={"/cart"} render={ ()=><Cart/> }/>
        <Route path={"/about"} render={ ()=><About/> }/>
    </div>
  );
}

export default App;
