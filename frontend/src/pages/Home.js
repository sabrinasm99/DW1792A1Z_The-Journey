import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import { useQuery } from "react-query";
import axios from "axios";

function Home({ setShowModalLogin, setShowModalRegister }) {
  const getData = async () => {
    const result = await axios.get("http://localhost:5000/api/v1/journeys");
    return result;
  };

  const { isLoading, data, error } = useQuery("journeys", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );

  return (
    <>
      <Header
        setShowModalLogin={setShowModalLogin}
        setShowModalRegister={setShowModalRegister}
      />
      <HomeContent posts={data} />
    </>
  );
}

export default Home;
