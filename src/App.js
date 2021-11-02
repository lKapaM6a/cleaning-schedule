import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages";
import {UsersPage} from "./pages/users/users";
import {CalendarPage} from "./pages/calendar/calendar";
import {DraftsPage} from "./pages/drafts/drafts";
import {SettingsPage} from "./pages/settings/settings";
import {SpamPage} from "./pages/spam/spam";
import {StatsPage} from "./pages/stats/stats";

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>

                    <Route path="/users" component={UsersPage}/>

                    <Route path="/calendar" component={CalendarPage}/>

                    <Route path="/drafts" component={DraftsPage}/>

                    <Route path="/settings" component={SettingsPage}/>

                    <Route path="/spam" component={SpamPage}/>

                    <Route path="/stats" component={StatsPage}/>
                </Switch>
            </Router>
        </>
    );
}
