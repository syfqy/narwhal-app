import React from "react";
import StarIcon from '@mui/icons-material/Star';
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PeopleIcon from "@mui/icons-material/People";

function TeamCard(props) {

  return (
    <div className="team-card">
      <div className="team-header">
        <img className="team-logo" src={props.img} />
        <div className="team-details">
          <h2>{props.name}</h2>
          <p className="grey-out">Created at: {props.createdAt}</p>
        </div>
        {props.isFavorited ?
        <StarIcon style={{fill: "#F8CE43"}}/> :
        <StarIcon style={{fill: "#E4E7EC"}}/> 
        }
      </div>
      <p>{props.desc}</p>
      <div className="team-metrics">
        <QuestionAnswerIcon />
        <p>{props.cCount} Campaigns</p>
        <PeopleIcon />
        <p>{props.lCount} Leads</p>
      </div>
    </div>
  );
}

export default TeamCard;
