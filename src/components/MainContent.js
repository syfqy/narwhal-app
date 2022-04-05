import React from "react";
import TeamCard from "./TeamCard";
import data from "./data";

function MainContent(props) {
  const teams = data.teams;

  const currentTabMap = {
    0: "All",
    1: "Favorited",
    2: "Archived",
  }

  const currentTabName = currentTabMap[props.currentTab]

  const getCurrentTeams = (()=>{
    if (currentTabName === "Favorited") {
      return teams.filter((team) =>
        team.is_favorited
      )
    } else if (currentTabName === "Archived") {
      return teams.filter((team) => 
        team.is_archived
      )}
    else {
      return teams
    }
  })

  const currentTeams = getCurrentTeams();

  const nCurrentTeams = currentTeams.length;
  const nAllTeams = teams.length;

  return (
    <div className="main-content">
      <div className="content-header">
        <h2>{currentTabName} Teams</h2>
        <p className="grey-out">
          Showing {nCurrentTeams} out of {nAllTeams} teams
        </p>
      </div>

      <div className="cards-grid">
        {currentTeams.map((team) => (
          <TeamCard
            key={team.id}
            name={team.name}
            img={team.image}
            desc={team.description}
            cCount={team.campaigns_count}
            lCount={team.leads_count}
            isFavorited={team.is_favorited}
            isArchived={team.is_archived}
            createdAt={team.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;