import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

function Home({ setShowModalLogin, setShowModalRegister }) {
  return (
    <>
      <Header setShowModalLogin={setShowModalLogin} setShowModalRegister={setShowModalRegister} />
      <HomeContent />
    </>
  );
}

export default Home;
