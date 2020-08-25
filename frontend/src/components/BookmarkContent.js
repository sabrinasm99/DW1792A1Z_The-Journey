import React from "react";
import dewata from "../image/dewata.png";
import minibookmark from "../image/minibookmark.svg";

function BookmarkContent() {
  return (
    <>
      <div className="mt-12 px-10">
        <h1 className="text-4xl font-bold">Bookmark</h1>
        <div className="grid grid-cols-4 gap-10 mt-20">
          <div className="relative bg-white rounded shadow-md">
            <img src={dewata} className="w-full" />
            <div className="my-3 px-4">
              <h2 className="font-bold text-lg">Bersemayam di tanah Dewata</h2>
              <h3 className="font-light text-xs" style={{ color: "#BFBFBF" }}>
                29 July 2020, Cipto
              </h3>
              <h3 className="mt-3 text-sm" style={{ color: "#6C6C6C" }}>
                Liburan di tahun baru 2020 keberangkatan saya menuju Pulau
                Dewata Bali. Sampai lah saya malam itu di Bali Airport menujukan
                waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
              </h3>
            </div>
            <div
              className="absolute bg-white rounded-full p-1"
              style={{ top: "6px", right: "6px" }}
            >
              <img src={minibookmark} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookmarkContent;
