import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import placeholder from '../assets/images/profile-placeholder.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Profile() {
  return (
    <div className="profile-info">
        <p className="profile-greeting grey-out">Hello, John</p>
        <ProfilePhoto src={placeholder} alt="placeholder"/>
        <ArrowDropDownIcon sx={{ opacity: 0.5 }}/>
    </div>
  )
}

export default Profile