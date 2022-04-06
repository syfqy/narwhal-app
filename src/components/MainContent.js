import React from "react";
import useFetch from "./useFetch";
import TeamCard from "./TeamCard";

function MainContent(props) {
  const currentTabMap = {
    0: "All",
    1: "Favorited",
    2: "Archived",
  };

  const currentTabName = currentTabMap[props.currentTab];

  // fetch teams
  const {
    data: teams,
    isLoading,
    error
  } = useFetch("https://61c9cc6b20ac1c0017ed8e76.mockapi.io/teams");

  const getCurrentTeams = () => {
    if (currentTabName === "Favorited") {
      return teams.filter((team) => team.is_favorited);
    } else if (currentTabName === "Archived") {
      return teams.filter((team) => team.is_archived);
    } else {
      return teams;
    }
  };

  const currentTeams = getCurrentTeams();

  const nCurrentTeams = currentTeams.length;
  const nAllTeams = teams.length;

  return (
    <div className="main-content">
      {error && <h2>Error. Please try again later.</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !error && (
        <>
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
        </>
      )}
    </div>
  );
}

export default MainContent;