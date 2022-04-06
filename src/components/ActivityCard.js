import React from 'react'

function ActivityCard(props) {

  // maps action in json to description
  const actionDescMap = {
    "added_leads": "added leads to",
    "archived_team": "archived the team",
    "increased_quota": "increased quota for",
  }

  return (
    <div className="activity-card">
        <img className="activity-avatar" src={props.img}/>
        <div className="activity-details">
            <p><strong>{props.name}</strong> {actionDescMap[props.action]} <strong>{props.target}</strong>.</p>
            <p className="grey-out">{props.createdAt}</p>
        </div>
    </div>
  )
}

export default ActivityCard