import React from "react";
import Header from "../components/Header";
import ProfileContent from "../components/ProfileContent";
import { useQuery } from "react-query";
import axios from "axios";

function Profile() {
  const { userId, token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/journeys-user/${userId}`,
      config
    );
    return result;
  };

  const { isLoading, data, error } = useQuery("journeysUser", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  return (
    <>
      <Header />
      <ProfileContent posts={data} />
    </>
  );
}

export default Profile;
