// System imports
import { useEffect, useState } from 'react';

// Packages imports
import { Switch, Route, Link } from "react-router-dom";

// Custom Components Imports

// Custom Pages Imports
import LandingPage from './Pages/LandingPage';
import Error404Page from './Pages/Error404Page';


const App = () => {
    // <Variables Definition>

    // Global states

    // </Variables Definition>



    // <UseEffects>

    // </UseEffects>



    // <Main Block Return>

    return (
        <Switch>            
            {/* App Pages */}
            <Route path="/" exact><LandingPage /></Route>           
            
            {/* Others, nondynamic or data dependent pages */}

            {/* Links for errors (404 Page, Server Down Page, Maintenance Page) */}
            <Route path="*"><Error404Page /></Route>
        </Switch>
    )

    // </Main Block Return>
}

export default App;