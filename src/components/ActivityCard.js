import React from 'react'

function ActivityCard(props) {
  return (
    <div className="activity-card">
        <img className="activity-avatar" src={props.img}/>
        <div className="activity-details">
            <p><strong>{props.name}</strong> {props.action} to <strong>{props.target}</strong></p>
            <p className="grey-out">{props.createdAt}</p>
        </div>
    </div>
  )
}

export default ActivityCard