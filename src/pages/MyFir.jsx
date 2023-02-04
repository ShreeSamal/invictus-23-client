import React, { useEffect,useState } from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router';
import "./css/home.css";
import "./css/fir.css"
import './css/myFir.css'
import { useCookies } from 'react-cookie';
var CryptoJS = require('crypto-js');

export default function MyFir() {
    const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const email = decryptedData.email;
    const [fir, setFir] = useState([]);
    useEffect(() => {
        getFir();
    }, []);
    async function getFir() {
        const res = await fetch('http://localhost:5000/fir', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           email
          })
        })
    
        const data = await res.json();
        console.log(data.fir);
        setFir(data.fir);
      }
    const navigate = useNavigate()
    const viewDetails = (id) => {
        navigate(`/myFirDetails/${id}`);
    }
  return (
    <>
        <div className="home-container">
            <Profile />
            <div className="fir-wrap">
                <p className='fir-title'>My FIRs</p>
                {fir.length>0 &&
                <div className='myfir-lst'>
                    {fir.map((f) => (
                    <div className="myfir-card">
                        <p className='myfir-type'>{f.complaint_type}</p>
                        <p className='myfir-date'>{f.date.slice(0,10)}</p>
                        {f.status==='Pending' && <p className='myfir-status'>Status: <span >{f.status}</span></p>}
                        {f.status==='In Progress' && <p  className='myfir-status'>Status: <span style={{color: "yellow"}}>{f.status}</span></p>}
                        {f.status==='Resolved' && <p  className='myfir-status'>Status: <span style={{color: "green"}}>{f.status}</span></p>}
                        
                        <button className='myfir-btn' onClick={()=>viewDetails(f._id)}><i class="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                    </div>
                    ))}
                </div>
}
{
    fir.length===0 &&
    <div className='myfir-lst'>
        <h1><p className='myfir-no'>No FIRs Found</p></h1>
    </div>
}
            </div>
        </div>
    </>
  )
}
