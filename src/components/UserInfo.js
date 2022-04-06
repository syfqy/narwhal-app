import React, { useState, useEffect } from "react";
import Inbox from "./Inbox";
import Profile from "./Profile";

function UserInfo() {
  // get current user

  const url = "https://61c9cc6b20ac1c0017ed8e76.mockapi.io/current-user";
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // prevent set state when unmounted warning
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Unable to request data for this resource");
        }
        if (isMounted) {
          const data = await res.json();
          console.log(data[0].current_user);
          setCurrentUser(data[0].current_user);
          setError(null);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
    // clean up to prevent fetching after navigating away from page
    return () => {
      isMounted = false;
    };
  }, [url]);

  return (
    <>
      {error && <h2>Error. Please try again later.</h2>}
      {isLoading && <h2>Loading...</h2>}

      {!isLoading && !error && (
        <>
          <Inbox nCount={currentUser.notifications_count} />
          <Profile name={currentUser.name} avatar={currentUser.avatar} />
        </>
      )}
    </>
  );
}

export default UserInfo;
