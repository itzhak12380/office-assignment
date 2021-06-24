import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import OfficeHome from './OfficeHome'
import EmployList from './EmployList'
import ContactInfo from './ContectInfo'
export default function MainOffice() {
 const [Emloyde, setEmloyde] = useState(<EmployList/>)
    return (
        <div>

            <Router>
                <header style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly"}}>
                    <h3><Link to="/Home"> Home</Link></h3>
                    <h3><Link to="/EmployList"> EmployList</Link></h3>
                    <h3><Link to="/ContactInfo"> ContactInfo</Link></h3> </header>
                <Switch>
                    <Route path="/Home"><OfficeHome /> </Route>
                    <Route path="/EmployList">{Emloyde} </Route>
                    <Route path="/ContactInfo"><ContactInfo /></Route>
                </Switch>

            </Router>
            <footer style={{display:'flex',flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"red"}} > footer</footer>



        </div>
    )
}