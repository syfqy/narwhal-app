import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon
        sx={{
          marginRight: "0.5rem",
          marginTop: "1.2rem",
          opacity: "50%",
        }}
      />
      <TextField
        InputProps={{ disableUnderline: true }}
        id="standard-basic"
        label="Search team name..."
        variant="standard"
      />
    </div>
  );
}

export default SearchBar;