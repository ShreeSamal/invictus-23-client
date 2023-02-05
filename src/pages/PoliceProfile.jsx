import React from 'react'
import "./css/home.css"
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const PoliceProfile = () => {
  function logout(){
    removeCookie('user');
    console.log('Loged Out Successfully');
    window.location.href = '/login';
  }
  const [cookies, setCookie,removeCookie] = useCookies('user');
  return (
    <>
    <aside className="home-profile">
    <img src="/images/live-duty-department.png" alt="" className="home-logo"/>
    <div className='title'>Live Duty Department</div>
    <div className="content-list">
      <ul className="aside-list">
      <li className="asideItem"><Link to='/policeHome' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-house icon"></i>Home</Link></li>
      <li className="asideItem"><Link to='/police/cases' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-journal icon"></i>Cases</Link></li>
      <li className="asideItem"><Link to='/police/anonymous/information' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-exclamation-circle icon"></i>Anonymous Information</Link></li>
      <li className="asideItem"><Link to='/police/feedback' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-card-text icon"></i>Feedback</Link></li>
      <li className="asideItem"><a onClick={logout} href='#' style={{ textDecoration: 'none', color: '#fff', fontSize: '20px', display: 'block', width: '100%', height: '100%', padding: "10px" }}><i className="bi bi-box-arrow-in-right icon"></i>Logout</a></li>
      </ul>
    </div>
  </aside>
    </>
  )
}

export default PoliceProfile