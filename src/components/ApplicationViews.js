import React from "react"
import {Route} from "react-router-dom"
import {LocationProvider} from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"

export const ApplicationViews = () => {
  return (
    <>
    <LocationProvider>
      <Route exact path="/">
        <LocationList />
      </Route>
    </LocationProvider>
    </>
  )
}