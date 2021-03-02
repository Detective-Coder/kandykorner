import React from "react"
import {Route} from "react-router-dom"
import {LocationProvider} from "./location/LocationProvider"
import {LocationList} from "./location/LocationList"
import {Home} from "./Home"

export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/">
      <Home />
    </Route>

    <LocationProvider>
      <Route exact path="/locations">
        <LocationList />
      </Route>
    </LocationProvider>
    </>
  )
}