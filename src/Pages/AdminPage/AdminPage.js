import React from 'react'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Footer from '../../Components/Footer/Footer'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import "./AdminPage.css"

export default function AdminPage() {
  return (
    <div className='dashboard-page'>
        <NavigationBar></NavigationBar>
        <Dashboard></Dashboard>
        <Footer></Footer>
    </div>
  )
}
