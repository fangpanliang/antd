import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import index from "../pages/index/Index";
import App from "../pages/usermanage/index/App";
import passwd from "../pages/usermanage/passwdchange/App";
import login from "../pages/login/App";
import textretrieval from '../pages/retrievalresult/resultbasetext';
import drawingtrieval from '../pages/retrievalresult/resultbasedrawing';
import comparison from '../pages/comparison/App'
import drawingupload from '../pages/drawingupload/App'
import drawingmanage from '../pages/drawingmanage/App'
import maintain from '../pages/maintain/App'
import logmanage from '../pages/logmanage/App'
import test from '../pages/test/App'



const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={index}/>
            <Route exact path="/usermanage" component={App}/>
            <Route exact path="/passwd" component={passwd}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/textretrieval" component={textretrieval}/>
            <Route exact path="/drawingtrieval" component={drawingtrieval}/>
            <Route exact path="/comparison" component={comparison}/>
            <Route exact path="/drawingupload" component={drawingupload}/>
            <Route exact path="/drawingmanage" component={drawingmanage}/>
            <Route exact path="/maintain" component={maintain}/>
            <Route exact path="/logmanage" component={logmanage}/>
            <Route exact path="/test" component={test}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;