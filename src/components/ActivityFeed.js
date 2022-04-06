import React from "react";
import useFetch from "./useFetch";
import ActivityCard from "./ActivityCard";

function ActivityFeed() {
  // fetch activities
  const {
    data: activities,
    isLoading,
    error,
  } = useFetch("https://61c9cc6b20ac1c0017ed8e76.mockapi.io/activities");

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Activity</h2>
      </div>

      {error && <h2>Error. Please try again later.</h2>}
      {isLoading && <h2>Loading...</h2>}

      {!isLoading && !error && (
        <>
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              name={activity.person.name}
              img={activity.person.avatar}
              action={activity.action}
              target={activity.target}
              createdAt={activity.created_at}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ActivityFeed;