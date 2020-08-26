import React from "react";
import dewatadetail from "../image/dewatadetail.png";

function DetailPostContent({ posts }) {
  const detail = posts.data.data;
  return (
    <>
      <div className="my-12 px-16">
        <div className="flex">
          <h1 className="text-4xl font-bold">{detail.title}</h1>
          <div className="ml-auto flex items-center">
            <h1 className="text-lg font-semibold">{detail.user.fullName}</h1>
          </div>
        </div>
        <h1 style={{ color: "#3B97D3" }}>{detail.date}</h1>
        {detail.image ? (
          <img
            src={`http://localhost:5000/image/${detail.image}`}
            className="w-full mt-10"
          />
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: detail.description }}></div>
      </div>
    </>
  );
}

export default DetailPostContent;
