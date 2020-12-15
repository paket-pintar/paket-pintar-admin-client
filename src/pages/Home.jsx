import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { Navbar } from '../components'
import { Dashboard, History, NewPackage, Scan, CustomerPackages, NewPackageDesc } from './index'
import { Switch, Route } from 'react-router-dom'

export default function Home(){

  useEffect(() => {
  }, [])

  return(

    <div className="flex flex-row h-screen">
      
      <div>
        <Navbar />

      </div>

      <div className="w-4/5 main-content rounded-tl-lg bg-white">
      <Switch>
        <Route path="/history">
          <History />
        </Route>

        <Route path="/new/:userId">
          <NewPackageDesc />
        </Route>
        <Route path="/new">
          <NewPackage />
        </Route>

        <Route path="/scan">
          <Scan />
        </Route>

        <Route path="/customer-packages/:UserId">
          <CustomerPackages />
        </Route>

        <Route path="/">
          { localStorage.getItem('access_token')? <Dashboard /> : <Redirect to="/login" />}
          {/* <Dashboard /> */}
        </Route>
      </Switch>
        
      </div>

    </div>
  )
}