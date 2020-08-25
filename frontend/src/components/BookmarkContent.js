import React from "react";
import minibookmark from "../image/minibookmark.svg";

function BookmarkContent({ posts }) {
  const array = posts.data.data;
  return (
    <>
      <div className="mt-12 px-10">
        <h1 className="text-4xl font-bold">Bookmark</h1>
        <div className="grid grid-cols-4 gap-10 mt-20">
          {array.length > 0 ? (
            array.map((val) => {
              return (
                <div key={val.id} className="relative bg-white rounded shadow-md">
                  <img src={`http://localhost:5000/image/${val.journey.image}`} className="w-full" />
                  <div className="my-3 px-4">
                    <h2 className="font-bold text-lg">
                      {val.journey.title}
                    </h2>
                    <h3
                      className="font-light text-xs"
                      style={{ color: "#BFBFBF" }}
                    >
                      {val.journey.date}, {val.journey.user.fullName}
                    </h3>
                    <h3 className="mt-3 text-sm" style={{ color: "#6C6C6C" }}>
                      {val.journey.description}
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
            <div>No Bookmark List</div>
          )}
        </div>
      </div>
    </>
  );
}

export default BookmarkContent;
