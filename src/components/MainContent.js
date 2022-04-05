import React from "react";
import TeamCard from "./TeamCard";
import data from "./data";

function MainContent() {
  const teams = data.teams;
  const currentTab = "Favorites" 

  const getCurrentTeams = (()=>{
    if (currentTab === "Favorites") {
      return teams.filter((team) =>
        team.is_favorited
      )
    } else if (currentTab === "Archived") {
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
        <h2>All Teams</h2>
        <p className="grey-out">
          Showing {nCurrentTeams} out of {nAllTeams} teams
        </p>
      </div>

      <div className="cards-grid">
        {teams.map((team) => (
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