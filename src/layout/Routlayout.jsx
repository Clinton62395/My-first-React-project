import React from 'react'
import { Outlet } from 'react-router-dom'
import Mynavbar from "../components/navbar"
export default function Routlayout() {
  return (
      <>
          <Mynavbar/>
          <Outlet/>
    </>
  )
}
