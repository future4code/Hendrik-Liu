import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import TripsListPage from '../pages/TripsListPage'
import FormPage from '../pages/FormPage'
import LoginPage from '../pages/LoginPage'
import AdminPage from '../pages/AdminPage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/tripslist">
          <TripsListPage />
        </Route>
        <Route exact path="/tripslist/form">
          <FormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/newtrip">
          <CreateTripPage />
        </Route>
        <Route exact path="/tripdetails">
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