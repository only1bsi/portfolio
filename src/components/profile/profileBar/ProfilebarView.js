import React from 'react'
import "./ProfileBar.css"
import ProfileDetails from '../ProfileDetails'
import ProfileImg from '../ProfileImg'
import ProfileFooter from '../ProfileFooter'

function ProfileBarView() {
  return (
    <div className=' profile-bar'>
     <ProfileDetails />
     <ProfileImg />
     <ProfileFooter />
    </div>
  )
}

export default ProfileBarView