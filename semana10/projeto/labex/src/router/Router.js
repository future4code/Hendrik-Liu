import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import FormPage from '../pages/FormPage'
import LoginPage from '../pages/LoginPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripsListPage from '../pages/TripsListPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/aplication-form">
          <FormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/login/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <TripsListPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;