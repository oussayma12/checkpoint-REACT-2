import React from 'react';
import Card from "react-bootstrap/Card";



const Player = ({ player, name="Unknown Player", team= "Unknown Team",nationality= "Unknown nationality" , imageUrl="https://via.placeholder.com/150", }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={player.imageUrl} alt="image" style={ {width :"100%", height: "100%",
    objectfit: "cover"}} />
      <Card.Body>
        <Card.Title >{player.name}</Card.Title>
        <Card.Text>
          Team: {player.team} <br />
          Nationality: {player.nationality} <br />
          Jersey Number: {player.jerseyNumber} <br />
          Age: {player.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Player.defaultProps = {
//   name: "Unknown Player",
//   team: "Unknown Team",
//   nationality: "Unknown",
//   jerseyNumber: 0,
//   age: 0,
//   imageUrl: "https://via.placeholder.com/150",
// };

export default Player;