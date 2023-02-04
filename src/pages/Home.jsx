import React, { useEffect, useState } from "react";
import "./css/home.css";
import Profile from "./Profile";
import { Line } from "react-chartjs-2";
const Home = () => {
  const [stats, setStats] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    getStats();
  }, []);
  async function getStats() {
  const res = await fetch("http://localhost:5000/stats");
  const data = await res.json();
  setStats(data[0]);
  }
  if(stats){
  return (
    <div className="home-container">
      <Profile />


      <div className="home-stats">
        <div className="home-stats-wrap">
          <p className="home-title">Welcome to Live Duty Department!!!</p>

          <div className="home-location">
            <label className="home-select-location">Select a Location:</label>
            <select name="location" className="home-location-dropdown">
              <option value="location">Selection Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="thane">Thane</option>
              <option value="palghar">Palghar</option>
              <option value="nashik">Nashik</option>
            </select>
          </div>

          <div className="home-police-number">
            <p className="home-police-number-title">Number of Police In the Region:</p>
            <p className="home-police-number-value">{stats.police_count}</p>
          </div>

          <div className="home-police-number">
            <p className="home-police-number-title">Number of Police Branches:</p>
            <p className="home-police-number-value">{stats.branches_count}</p>
          </div>

          <div className="home-graph">
            <p className="home-graph-title">Stats of Cases:</p>
            <div className="home-graph-display">
            </div>
          </div>

          <div className="home-branch">
            <p className="home-branch-title">List of Branches:</p>
            <div className="home-branch-lst">
              {stats!=="" &&  stats.branches.map((branch) => (
              <p className="home-branch-name">{branch}</p>
              ))
              }
            </div> 
          </div>

        </div>
      </div>
    </div>
  )}
  else{
    return(
    <div>
      Loading
    </div>)
  }
};

export default Home;
