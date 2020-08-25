import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import ModalLogin from "./components/subcomponents/ModalLogin";
import ModalRegister from "./components/subcomponents/ModalRegister";
import Profile from "./pages/Profile";
import DetailPost from "./pages/DetailPost";
import NewJourney from "./pages/NewJourney";

function App() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  return (
    <Router>
      {showModalLogin && <ModalLogin setShowModalLogin={setShowModalLogin} />}
      {showModalRegister && (
        <ModalRegister setShowModalRegister={setShowModalRegister} />
      )}
      <Route path="/" exact>
      <Home
            setShowModalLogin={setShowModalLogin}
            setShowModalRegister={setShowModalRegister}
          />
      </Route>
      <Route path="/bookmark" component={Bookmark} />
      <Route path="/profile" component={Profile} />
      <Route path="/detail-post" component={DetailPost} />
      <Route path="/new-journey" component={NewJourney} />
    </Router>
  );
}

export default App;
