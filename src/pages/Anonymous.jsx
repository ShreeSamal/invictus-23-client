import React, { useState } from 'react';
import Profile from './Profile';
import { useCookies } from 'react-cookie';
import './css/home.css';
import './css/anonymous.css';
var CryptoJS = require('crypto-js');

const Anonymous = () => {
    const [incident_type, setIncidentType] = useState("");
    const [date, setDate] = useState("");
  
    const [location, setLocation] = useState("");
  
    const [police_station, setPoliceStation] = useState("");
  
    const [description, setDescription] = useState("");
    const [cookies] = useCookies('user');
  var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const email = decryptedData.email;
    async function submitData() {
        console.log('submit')
        const res = await fetch('http://localhost:5000/anonymous/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            incident_type,
            email,
            location,
            police_station,
            date,
            description,
          })
        })
    
        const data = await res.json();
        alert(data.message);
        window.location.reload();
      }

    return (
        <div className="home-container">
            <Profile />
            <div className="home-stats">
                <div className="anonymous">
                    <p className='anonymous-title'>Anonymous Lead</p>
                    <div className="anonymous-body">


                        <table>
                            <tr>
                                <td><label className='anonymous-topic'>Incident Type:<span>*</span></label></td>
                                <td id='anonymous-type'><select name="type" className="anonymous-type-dropdown" onChange={(e)=>{setIncidentType(e.target.value)}}>
                                    <option value="type">Select Type</option>
                                    <option value="missing">Missing Person</option>
                                    <option value="rob">Robbery</option>
                                    <option value="unidentified">Unidentified Object</option>
                                    <option value="accident">Traffic Accident</option>
                                    <option value="murder">Murder</option>
                                    <option value="drugs">Drugs</option>
                                    <option value="others">Others</option>
                                </select></td>
                                <td><label className='anonymous-topic'>Incident Date:<span>*</span></label></td>
                                <td><input type="date" onChange={(e)=>{setDate(e.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td><label className='anonymous-topic'>Incident Location:<span>*</span></label></td>
                                <td><input type="mail" onChange={(e)=>{setLocation(e.target.value)}}/></td>
                                <td><label className='anonymous-topic'>Police Station:<span>*</span></label></td>
                                <td><input type="mail" onChange={(e)=>{setPoliceStation(e.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td><label className='anonymous-topic'>Description:<span>*</span></label></td>
                                <td colSpan={3}><textarea name="" id="" rows="4" className='textarea' onChange={(e)=>{setDescription(e.target.value)}}></textarea></td>
                            </tr>

                        </table>
                        <div className="anonymous-text">
                            <p>Your Identity will be hidden from everyone.</p>
                        </div>
                        <div className="anonymous-btnGroup">
                            <button>Reset</button>
                            <button onClick={submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anonymous