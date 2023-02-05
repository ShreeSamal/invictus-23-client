import React from 'react'
import {Link} from 'react-router-dom'
import "./css/home.css"
import { useCookies } from 'react-cookie';
export default function AdminProfile() {
    const logout = () => console.log('logout')
  return (
    <>
    <aside className="home-profile">
    <img src="/images/live-duty-department.png" alt="" className="home-logo"/>
    <div className='title'>Live Duty Department</div>
    <div className="content-list">
      <ul className="aside-list">
      <li className="asideItem"><Link to='/admin/home' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-house icon"></i>Home</Link></li>
      <li className="asideItem"><Link to='/admin/addOfficers' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-person-add icon"></i>Add Officers</Link></li>
      <li className="asideItem"><Link to='/admin/anonymous' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-exclamation-circle icon"></i>Anonymous Information</Link></li>
      <li className="asideItem"><Link to='/admin/feedback' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-card-text icon"></i>Feedback</Link></li>
      <li className="asideItem"><a onClick={logout} href='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-box-arrow-in-right icon"></i>Logout</a></li>
      </ul>
    </div>
  </aside>
    </>
  )
}
