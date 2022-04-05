import React from 'react';
import data from './data';
import ActivityCard from './ActivityCard';

function ActivityFeed() {

  const activities = data.activities;

  return (
    <div className="activity-container">
      <div className="activity-header"> 
        <h2>Activity</h2>
      </div>
      {activities.map((activity)=> (
        <ActivityCard 
          key={activity.id}
          name={activity.person.name}
          img={activity.person.avatar}
          action={activity.action}
          target={activity.target}
          createdAt={activity.created_at}
        />
      ))}
    </div>
  )
}

export default ActivityFeed;