import React, { useState } from "react";
import icon2 from "../image/icon2.svg";
import icon from "../image/icon.svg";
import profile from "../image/profile.svg";
import write from "../image/write.svg";
import bookmark from "../image/bookmark.svg";
import logout from "../image/logout.svg";
import triangle from "../image/triangle.svg";
import userprofile from "../image/userprofile.png";
import { Link, useHistory } from "react-router-dom";

function Header({ setShowModalLogin, setShowModalRegister }) {
  const [showModalUser, setShowModalUser] = useState(false);
  const { token } = localStorage;
  const history = useHistory();

  const submitLogout = () => {
    localStorage.clear();
    setShowModalUser(!showModalUser);
    history.push("/");
  };

  return (
    <>
      {token ? (
        <div
          className="relative w-full shadow-md py-3"
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <div className="px-16 flex">
            <Link to="/">
              <img src={icon2} />
            </Link>
            <img
              src={userprofile}
              onClick={() => setShowModalUser(!showModalUser)}
              className="ml-auto cursor-pointer"
            />
          </div>
          <div
            className={`${
              showModalUser ? "block" : "hidden"
            } absolute bg-white py-3 rounded font-bold shadow-md`}
            style={{ top: "75px", left: "1133px" }}
          >
            <div className="px-5">
              <Link to="/profile">
                <div className="flex py-1 cursor-pointer hover:bg-blue-200">
                  <img src={profile} className="mr-2" />
                  <h2>Profile</h2>
                </div>
              </Link>
              <Link to="/new-journey">
                <div className="flex py-1 cursor-pointer hover:bg-blue-200">
                  <img src={write} className="mr-2" />
                  <h2>New Journey</h2>
                </div>
              </Link>
              <Link to="/bookmark">
                <div className="flex py-1 cursor-pointer hover:bg-blue-200">
                  <img src={bookmark} className="mr-2" />
                  <h2>Bookmark</h2>
                </div>
              </Link>
            </div>
            <hr />
            <div className="px-5">
              <div
                className="flex py-2 cursor-pointer hover:bg-blue-200"
                onClick={submitLogout}
              >
                <img src={logout} className="mr-2" />
                <h2>Logout</h2>
              </div>
            </div>
            <div className="absolute" style={{ top: "-11px", right: "2px" }}>
              <img src={triangle} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full text-white"
          style={{
            backgroundImage: `url(${require("../image/phuket.png")})`,
            height: "470.7px",
          }}
        >
          <div className="px-16 pt-5">
            <div className="flex">
              <Link to="/">
                <img src={icon} />
              </Link>
              <div className="ml-auto">
                <button
                  onClick={() => setShowModalLogin(true)}
                  className="border border-white py-1 px-6 font-medium text-sm rounded-md mr-2"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowModalRegister(true)}
                  className="py-1 px-6 font-medium border text-sm rounded-md"
                  style={{ backgroundColor: "#2E86DE", borderColor: "#2E86DE" }}
                >
                  Register
                </button>
              </div>
            </div>
            <div className="mt-16">
              <h1 className="tracking-wide font-bold text-5xl">The Journey</h1>
              <h1 className="tracking-wide font-bold text-5xl">
                you ever dreamed of
              </h1>
              <h1 className="tracking-wide font-thin">
                We made a tool so you can easily keep & share your travel
                memories
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
