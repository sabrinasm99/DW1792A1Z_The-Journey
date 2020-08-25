import React from "react";
import photo from "../image/photo.png";
import dewata from "../image/dewata.png";
import minibookmark from "../image/minibookmark.svg";
import { useQuery } from "react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ProfileContent({ posts }) {
  const history = useHistory();
  const { userId, token } = localStorage;

  const clickDetail = (id) => {
    history.push(`/detail-post/${id}`);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/user/${userId}`,
      config
    );
    return result;
  };

  const { isLoading, data, error } = useQuery("detailUser", getData);
  if (isLoading)
    return (
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );

  const detail = data.data.data;
  const array = posts.data.data;
  return (
    <>
      <div className="mt-12 px-10">
        <h1 className="text-4xl font-bold">Profile</h1>
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col">
            <img src={photo} />
            <h2 className="font-bold mx-auto mt-3 text-xl">
              {detail.fullName}
            </h2>
            <h3 className="font-light mx-auto" style={{ color: "#6C6C6C" }}>
              {detail.email}
            </h3>
          </div>
        </div>
        <div className="my-16 grid grid-cols-4 gap-10">
          {array.length > 0 ? (
            array.map((val) => {
              return (
                <div
                  key={val.id}
                  className="relative bg-white rounded shadow-md"
                >
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
                      className="text-xs"
                      style={{ color: "#BFBFBF" }}
                    >
                      {val.date}, {val.user.fullName}
                    </h3>
                    <h3 className="mt-3 text-sm" style={{ color: "#6C6C6C" }}>
                      {val.description}
                    </h3>
                  </div>
                  <div
                    className="absolute bg-white rounded-full p-1"
                    style={{ top: "6px", right: "6px" }}
                  >
                    <img src={minibookmark} />
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileContent;
