import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProfileDetails from '../../components/ProfileDetails'
import Sidebar from '../../components/Sidebar'
import "./profile.scss"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profileside">
        <Sidebar/>
      </div>
      <div className="sidemenu">
          <div className="stickybar">
          <Navbar/>
          </div>
          <ProfileDetails/>
          <Footer/>
        </div>
      </div>
  )
}

export default Profile
