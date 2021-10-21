import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

// Libs
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import './assets/styles/main.scss'

// Pages
import Home from "./pages/Home"
import Users from "./pages/Users";
import Calendar from "./pages/Calendar";
import Drafts from "./pages/Drafts";
import Settings from "./pages/Settings";
import Spam from "./pages/Spam";
import Stats from "./pages/Stats";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>

                <Route path="/users">
                    <Users/>
                </Route>

                <Route path="/calendar">
                    <Calendar/>
                </Route>

                <Route path="/drafts">
                    <Drafts/>
                </Route>

                <Route path="/settings">
                    <Settings/>
                </Route>

                <Route path="/spam">
                    <Spam/>
                </Route>

                <Route path="/stats">
                    <Stats/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
