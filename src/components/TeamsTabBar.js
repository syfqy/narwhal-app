import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

function TeamsTabBar() {

  const [value, setValue] = useState("All");

  return (
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab 
            style={{minWidth:"fit-content",
                    marginRight: "1rem"}}
            label={<h2 className="tab-label">All</h2>}
            />
          <Tab 
            style={{minWidth:"fit-content",
                    marginRight: "1rem"}}
            label={<h2 className="tab-label">Favorites</h2>}
            />
          <Tab 
            style={{minWidth:"fit-content",
                    marginRight: "1rem"}}
            label={<h2 className="tab-label">Archived</h2>}
            />
        </Tabs>
  );
}

export default TeamsTabBar;
