import React from 'react'

import { Navbar } from '../components'
import { Dashboard, History, NewPackage, Scan, CustomerPackages, NewPackageDesc } from './index'
import { Switch, Route } from 'react-router-dom'

export default function Home(){
  return(

    <div className="flex flex-row h-screen">
      
      <Navbar />

      <div className="w-4/5 main-content rounded-tl-lg bg-white">
      <Switch>
        <Route path="/history">
          <History />
        </Route>

        <Route path="/new/userId">
          <NewPackageDesc />
        </Route>
        <Route path="/new">
          <NewPackage />
        </Route>

        <Route path="/scan">
          <Scan />
        </Route>

        <Route path="/customer-packages">
          <CustomerPackages />
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
        
      </div>

    </div>
  )
}