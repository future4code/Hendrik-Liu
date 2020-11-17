import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import CreateTripPage from '../pages/CreateTripPage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;