import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

// Libs
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import './assets/styles/main.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Pages
import Home from "./pages";
import UsersPage from "./pages/users/users";
import CalendarPage from "./pages/calendar/calendar";
import DraftsPage from "./pages/drafts/drafts";
import SettingsPage from "./pages/settings/settings";
import SpamPage from "./pages/spam/spam";
import StatsPage from "./pages/stats/stats";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route path="/users" component={UsersPage}/>

                <Route path="/calendar" component={CalendarPage}/>

                <Route path="/drafts" component={DraftsPage}/>

                <Route path="/settings" component={SettingsPage}/>

                <Route path="/spam" component={SpamPage}/>

                <Route path="/stats" component={StatsPage}/>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
