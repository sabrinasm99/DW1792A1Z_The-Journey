import React from "react";
import Header from "../components/Header";
import BookmarkContent from "../components/BookmarkContent";
import { useQuery } from "react-query";
import axios from "axios";

function Bookmark() {
  const { userId, token } = localStorage;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/bookmarks/${userId}`,
      config
    );
    return result;
  };

  const { isLoading, data, error } = useQuery("bookmarks", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );

  return (
    <>
      <Header />
      <BookmarkContent posts={data} />
    </>
  );
}

export default Bookmark;
