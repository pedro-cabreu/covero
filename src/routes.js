import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Final from './pages/Final';
import Game from './pages/Game';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/play" component={ Game }/>
                <Route path="/final" component={ Final }/>
            </Switch>
        </BrowserRouter>
    );
}