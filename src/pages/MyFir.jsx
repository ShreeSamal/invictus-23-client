import React from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router';
import "./css/home.css";
import "./css/fir.css"
import './css/myFir.css'
export default function MyFir() {
    const navigate = useNavigate()
    const viewDetails = () => {
        navigate('/myFirDetails');
    }
  return (
    <>
        <div className="home-container">
            <Profile />
            <div className="fir-wrap">
                <p className='fir-title'>My FIRs</p>
                <div className='myfir-lst'>
                    <div className="myfir-card">
                        <p className='myfir-type'>Robbery</p>
                        <p className='myfir-date'>04-02-2023</p>
                        <p className='myfir-status'>Status: <span>Pending</span></p>
                        
                        <button className='myfir-btn' onClick={viewDetails}><i class="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                    </div>
                    <div className="myfir-card">
                        <p className='myfir-type'>Robbery</p>
                        <p className='myfir-date'>04-02-2023</p>
                        <p className='myfir-status'>Status: <span>Pending</span></p>
                        
                        <button className='myfir-btn' onClick={viewDetails}><i class="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                    </div>
                    <div className="myfir-card">
                        <p className='myfir-type'>Robbery</p>
                        <p className='myfir-date'>04-02-2023</p>
                        <p className='myfir-status'>Status: <span>Pending</span></p>
                        
                        <button className='myfir-btn' onClick={viewDetails}><i class="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                    </div>
                    <div className="myfir-card">
                        <p className='myfir-type'>Robbery</p>
                        <p className='myfir-date'>04-02-2023</p>
                        <p className='myfir-status'>Status: <span>Pending</span></p>
                        
                        <button className='myfir-btn' onClick={viewDetails}><i class="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                    </div>
                    

                </div>
            </div>
        </div>
    </>
  )
}
