import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { Navbar } from '../components'
import { Dashboard, History, NewPackage, Scan, CustomerPackages, NewPackageDesc } from './index'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home(){
  const { packages } = useSelector(state => state.packages)
  const { users } = useSelector(state => state.user)

  useEffect(() => {
    console.log(users, '<<< users')
    console.log(packages)
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