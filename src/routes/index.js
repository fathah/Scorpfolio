import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { setDefaultTheme } from '../contexts/ThemeContext';
import BSCPage from '../pages/BSC/BSCPage';

export const AppRoute = () => {

    useEffect(() => {
        setDefaultTheme();
    }, [])

    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <BSCPage />
                </Route>
            </Switch>
        </>
    )
}