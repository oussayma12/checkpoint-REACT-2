import React from "react";
import PlayersList from "./PlayersList";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App" style={{padding: "20px" ,   backgroundsize: "cover" }}>
      <h1 style={{ color: "blue", textAlign: "center" , paddingTop:"30px" , paddingBottom:"30px", fontWeight:"bold" }}>FOOTBALL PLAYERS</h1>
      <PlayersList />
     

    </div>
  );
};

export default App;
