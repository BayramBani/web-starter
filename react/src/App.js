import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./page/home/Home";
import About from "./page/about/About";
import NotFound from "./page/not-found/NotFound";
import Notes from "./page/notes/Notes";
import Items from "./page/items/Items";
import Navbar from "./component/navbar/Navbar";
import {navbarData} from "./data/componentsData.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar data={navbarData}/>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/about'} component={About}/>
            <Route exact path={'/notes'} component={Notes}/>
            <Route exact path={'/items'} component={Items}/>
            <Route exact path={'*'} component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
