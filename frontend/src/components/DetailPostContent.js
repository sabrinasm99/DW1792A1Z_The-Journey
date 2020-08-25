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
        <img src={dewatadetail} className="w-full mt-10" />
        <h3 className="mt-10" style={{ color: "#6C6C6C" }}>
          {detail.description}
        </h3>
        {/* <h3 className="mt-5 text-3xl">Bersemayam di tanah</h3>
        <h3 className="text-3xl">Dewata Ke dua</h3>
        <h3 className="mt-5" style={{color: '#6C6C6C'}}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </h3>
        <h3 className="mt-5" style={{color: '#6C6C6C'}}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </h3> */}
      </div>
    </>
  );
}

export default DetailPostContent;
