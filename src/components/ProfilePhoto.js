import React from 'react'

function ProfilePhoto(props) {
  return (
    <div>
        <img className="profile-img" src={props.src} alt={props.alt} />
    </div>
  )
}

export default ProfilePhoto