import React from "react";
import { useParams } from "react-router-dom";
import UsersData from "./UsersData";

function UsersDetails() {
  const { userId } = useParams();

  const userDetailsData = UsersData.find((eachUser)=>eachUser.id == userId)
  return (
    <div>
      <h1>UsersDetails</h1>
      <h2>{userDetailsData.name}</h2>
      <h3>{userDetailsData.email}</h3>
      <h4>{userDetailsData.username}</h4>
      <h4>{userDetailsData.phone}</h4>
      <h4>{userDetailsData.website}</h4>
    </div>
  );
}

export default UsersDetails;
