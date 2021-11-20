import React from "react";
import { useUserContext } from "../context/userContext";

import MainScreen from "../components/MainScreen/Components/MainScreen.js";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <>
      <MainScreen />
      {/* // <h2>Name : {user.displayName}</h2>
      // <h2>Email : {user.email}</h2> */}

      <button onClick={logoutUser}>Log out</button>
    </>
  );
};

export default Dashboard;
