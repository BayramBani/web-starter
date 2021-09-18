import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./component/Navbar";
import NotFound from "./page/NotFound";

const App = () => {
   return (
      <BrowserRouter>
         <div>
            <Navbar/>
            <Switch>
               <Route exact path={"/"} component={Home}/>
               <Route exact path={"/about"} component={About}/>
               <Route exact path={"*"} component={NotFound}/>
            </Switch>
         </div>
      </BrowserRouter>
   );
};
export default App;

ReactDOM.render(<App/>, document.getElementById("root"));
