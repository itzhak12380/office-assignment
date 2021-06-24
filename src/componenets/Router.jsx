import React,{useState,useEffect} from 'react'; 
import Home from './Home';
import AboutME from './About';
import Help from './Help';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
export default function MyRouter(){

    return(
        <header>
        <Router>
            <div>
                <h1>app</h1>
                <ul>
                    <li> 
                        <Link to="/Home">Home</Link>
                    </li>
                    <li> 
                        <Link to="/aboutMe">about Me</Link>
                    </li>
                    <li> 
                        <Link to="/Help">Help</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route path="/Home">
                            <Home/>
                    </Route>
                    <Route path="/aboutMe">
                            <AboutME/>
                    </Route>
                    <Route path="/Help">
                            <Help/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </header>
    )
}