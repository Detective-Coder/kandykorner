import React from "react"
import {NavBar} from "./nav/NavBar"
import {ApplicationViews} from "./ApplicationViews"
import { LocationList } from "./location/LocationList"


export const KandyKorner = () => {
  <>
    <NavBar />
    <ApplicationViews />
    <LocationList />
  </>
}