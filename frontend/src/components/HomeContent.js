import React from "react";
import dewata from "../image/dewata.png";
import minibookmark from "../image/minibookmark.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

function HomeContent({ posts }) {
  const array = posts.data.data;
  const history = useHistory();
  const { token, userId } = localStorage;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const clickDetail = (id) => {
    history.push(`/detail-post/${id}`);
  };

  const addBookmark = (id) => {
    axios
      .post(
        "http://localhost:5000/api/v1/bookmark",
        { journeyId: id, profileId: userId },
        config
      )
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-12 mt-10">
      <h1 className="text-4xl font-bold">Journey</h1>
      <div
        className="mt-6 flex"
        style={{ paddingRight: "20px", paddingLeft: "20px" }}
      >
        <input
          type="text"
          placeholder="Find Journey"
          className="rounded-l-md pl-3 py-2 focus:outline-none focus:shadow-outline"
          style={{ width: "90%" }}
        />
        <button
          className="rounded-r-md flex items-center justify-center font-medium px-4 text-white"
          style={{ backgroundColor: "#2E86DE", width: "10%" }}
        >
          Search
        </button>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-10">
        {array.length > 0 ? (
          array.map((val) => {
            return (
              <div key={val.id} className="relative bg-white rounded shadow-md">
                <img
                  src={`http://localhost:5000/image/${val.image}`}
                  className="w-full cursor-pointer"
                  onClick={() => clickDetail(val.id)}
                />
                <div
                  className="my-3 px-4 cursor-pointer"
                  onClick={() => clickDetail(val.id)}
                >
                  <h2 className="font-bold text-lg">{val.title}</h2>
                  <h3
                    className="font-light text-xs"
                    style={{ color: "#BFBFBF" }}
                  >
                    {val.date}, {val.user.fullName}
                  </h3>
                  <h3 className="mt-3 text-sm" style={{ color: "#6C6C6C" }}>
                    {val.description}
                  </h3>
                </div>
                <div
                  onClick={() => addBookmark(val.id)}
                  className="absolute bg-white rounded-full p-1 cursor-pointer"
                  style={{ top: "6px", right: "6px" }}
                >
                  <img src={minibookmark} />
                </div>
              </div>
            );
          })
        ) : (
          <div>No Journey List</div>
        )}
      </div>
    </div>
  );
}

export default HomeContent;
