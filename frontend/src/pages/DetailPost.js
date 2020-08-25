import React from "react";
import Header from "../components/Header";
import DetailPostContent from "../components/DetailPostContent";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function DetailPost() {
  const { id } = useParams();
  const { token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(`http://localhost:5000/api/v1/journey/${id}`, config);
    return result;
  };

  const { isLoading, data, error } = useQuery("detailJourney", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );

  return (
    <>
      <Header />
      <DetailPostContent posts={data} />
    </>
  );
}

export default DetailPost;
