import React from "react";
import dewata from "../image/dewata.png";
import kuta from "../image/kuta.png";
import london from "../image/london.png";
import sydney from "../image/sydney.png";
import minibookmark from "../image/minibookmark.svg";

function HomeContent() {
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
        <div className="relative bg-white rounded shadow-md">
          <img src={dewata} className="w-full" />
          <div className="my-3 px-4">
            <h2 className="font-bold text-lg">Bersemayam di tanah Dewata</h2>
            <h3 className="font-light text-xs" style={{ color: "#BFBFBF" }}>
              29 July 2020, Cipto
            </h3>
            <h3  className='mt-3 text-sm' style={{ color: "#6C6C6C" }}>
              Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata
              Bali. Sampai lah saya malam itu di Bali Airport menujukan waktu
              jam 02.00, dan melanjutkan pejalanan yang menyenangkan..
            </h3>
          </div>
          <div className="absolute bg-white rounded-full p-1" style={{ top: "6px", right: "6px" }}>
                <img src={minibookmark} />
            </div>
        </div>
        <div className="bg-white rounded">
          <img src={kuta} className="w-full" />
          
        </div>
        <div className="bg-white rounded">
          <img src={london} className="w-full" />
        </div>
        <div className="bg-white rounded">
          <img src={sydney} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
