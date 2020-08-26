import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const { token } = localStorage;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

function NewJourneyContent() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  console.log(content);
  return (
    <>
      <div className="mt-12">
        <div className="px-10">
          <h1 className="text-4xl font-bold">New Journey</h1>
          <div className="px-10 mt-10">
            <h2 className="text-xl font-bold">Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 border rounded p-1 pl-2 focus:outline-none focus:shadow-outline"
              style={{ borderColor: "#A6A6A6" }}
            />
            <div
              className="mt-5 bg-white rounded border"
              style={{ borderColor: "#A3A3A3" }}
            >
              <ReactQuill
                onChange={(html) => setContent(html)}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
                formats={[
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "link",
                  "image",
                ]}
              />
              
            </div>
            <div className='flex mt-3'>
            <button
                onClick={() => {
                  console.log({
                    title: title,
                    userId: localStorage.getItem("userId"),
                    description: content,
                  });

                  axios
                    .post(
                      "http://localhost:5000/api/v1/journey",
                      {
                        title: title,
                        userId: localStorage.getItem("userId"),
                        description: content,
                      },
                      config
                    )
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err));
                }}
                className="ml-auto px-4 py-2 rounded bg-blue-700 text-white"
              >
                Post
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewJourneyContent;
