import React from "react";
import "./App.css";
import _ from "lodash";
import store from "./store/Store";
import Slidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Slidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
