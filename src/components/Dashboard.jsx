import { useAuth } from "../context/authContext";
import React, { useEffect, useState } from "react";
import "../style/team.css";

export const Dashboard = () => {
  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState(null);
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handlerlogout = async () => {
    await logout();
  };

  useEffect(() => {
    fetch(
      "https://v3.football.api-sports.io/teams?country=France&league=61&season=2022",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "bcab2a369bcd4c4b77fc6eb9291dca0a",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setTeams(data.response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function verEstado() {
    console.log(team);
  }

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="container-main">
      <div>
        Bienvenido {user.uid}
        <button onClick={handlerlogout}>Exit</button>
      </div>
      {teams
        ? teams.map((team1) => (
            <div className="container" key={team1.team.id}>
              <div className="div-logo">
                <img
                  src={team1.team.logo}
                  alt="logo de Nacional"
                  className="img-logo"
                />
              </div>
              <div className="info-team">
                <h1>{team1.team.name}</h1>
                <p>Fundado: {team1.team.founded}</p>
                <p>Estadio: {team1.venue.name}</p>
                <button onClick={verEstado} className="btn-primary">
                  Ver jugadores
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};


