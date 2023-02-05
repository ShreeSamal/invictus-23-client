import React from "react";
import "./css/home.css";
import "./css/fir.css";
import "./css/policeanonymous.css";
import PoliceProfile from "./PoliceProfile";
import { useCookies } from "react-cookie";
const PoliceAnonymous = () => {
  const [cookies] = useCookies("user");
  if (cookies.user) {
    window.location.href = "/login";
  }
  return (
    <>
    <div className="home-container">
      <PoliceProfile />
      <div className="home-stats">
        <div className="home-stats-wrap">
          <p className="home-title">Anonymous Information</p>
          <div className="police-anonymous">
            <div className="police-anonymous-card">
                <div className="police-anon-col">
                    <p className="police-anon type">Robbery</p>
                    <p className="police-anon date">04-02-2023</p>
                    <p className="police-anon station">Thane</p>
                    <p className="police-anon location">Thane Station</p>
                </div>
                <p className="police-anon-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.</p>
                <div className="anon-btnGroup">
                    <button>Mark as Read</button>
                </div>
            </div>
            <div className="police-anonymous-card">
                <div className="police-anon-col">
                    <p className="police-anon type">Robbery</p>
                    <p className="police-anon date">04-02-2023</p>
                    <p className="police-anon station">Thane</p>
                    <p className="police-anon location">Thane Station</p>
                </div>
                <p className="police-anon-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.</p>
                <div className="anon-btnGroup">
                    <button>Mark as Read</button>
                </div>
            </div>
            <div className="police-anonymous-card">
                <div className="police-anon-col">
                    <p className="police-anon type">Robbery</p>
                    <p className="police-anon date">04-02-2023</p>
                    <p className="police-anon station">Thane</p>
                    <p className="police-anon location">Thane Station</p>
                </div>
                <p className="police-anon-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consectetur minima facere rerum est reprehenderit explicabo itaque cum ea nihil.</p>
                <div className="anon-btnGroup">
                    <button>Mark as Read</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PoliceAnonymous;
