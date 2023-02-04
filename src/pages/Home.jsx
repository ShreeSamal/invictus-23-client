import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    // home
    // file fir
    // feedback
    <div className="home-container">
      <aside className="home-profile">
        <div className="home-logo"></div>
        <div className="content-list">
          <ul className="aside-list">
            <li className="asideItem"><Link to='/login' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%' }}><i class="bi bi-box-arrow-in-right icon"></i>Login</Link></li>
            <li className="asideItem"><Link to='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%' }}><i class="bi bi-person-add icon"></i>Sign Up</Link></li>
            <li className="asideItem"><Link to='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%' }}><i class="bi bi-house icon"></i>Home</Link></li>
            <li className="asideItem"><Link to='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%' }}><i class="bi bi-journal icon"></i>File FIR</Link></li>
            <li className="asideItem"><Link to='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%' }}><i class="bi bi-card-text icon"></i>Feedback</Link></li>
          </ul>
        </div>
      </aside>


      <div className="home-stats">
        <div className="home-stats-wrap">
          <p className="home-title">Welcome to Live Duty!!!</p>

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
            <p className="home-police-number-value">5000+</p>
          </div>

          <div className="home-graph">
            <p className="home-graph-title">Stats of Cases:</p>
            <div className="home-graph-display">
              
            </div>
          </div>

          <div className="home-branch">
            <p className="home-branch-title">List of Branches:</p>
            <div className="home-branch-lst">
              <p className="home-branch-name">Thane</p>
              <p className="home-branch-name">Mulund</p>
              <p className="home-branch-name">Kurla</p>
              <p className="home-branch-name">Lalbaugh</p>
            </div> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
