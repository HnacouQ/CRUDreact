import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './components/home';
import Products from './components/Products';
import Add from './components/Add';
import List from'./components/listItem';



export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route path="/products" exact>
                            <Products />
                        </Route>
                        <Route path="/list-item" exact>
                            <List></List>
                        </Route>
                        <Route path="/add" exact>
                            <Add />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
