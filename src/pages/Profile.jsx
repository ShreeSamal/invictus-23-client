import React from 'react'
import "./css/home.css"
import { Link } from 'react-router-dom'
export default function Profile() {
  return (
    <>
    <aside className="home-profile">
    <img src="/images/live-duty-department.png" alt="" className="home-logo"/>
    <div className='title'>Live Duty Department</div>
    <div className="content-list">
      <ul className="aside-list">
      <li className="asideItem"><Link to='/' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-house icon"></i>Home</Link></li>
      <li className="asideItem"><Link to='/fir' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-journal icon"></i>File FIR</Link></li>
      <li className="asideItem"><Link to='/myFir' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-card-list icon"></i>My FIR</Link></li>
      <li className="asideItem"><Link to='/anonymous' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-exclamation-circle icon"></i>Anonymous Lead</Link></li>
      <li className="asideItem"><Link to='/feedback' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-card-text icon"></i>Feedback</Link></li>
      <li className="asideItem"><Link to='/login' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-box-arrow-in-right icon"></i>Login</Link></li>
      </ul>
    </div>
  </aside>
    </>
  )
}
