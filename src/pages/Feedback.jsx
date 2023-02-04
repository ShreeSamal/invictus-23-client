import React, { useState } from "react";
import './css/feedback.css';
import './css/home.css'
import './css/anonymous.css'
import Profile from "./Profile";
import { useCookies } from 'react-cookie';

var CryptoJS = require('crypto-js');

const Feedback = () => {
    const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const email = decryptedData.email;
    async function submitData() {
        console.log('submit')
        const res = await fetch('http://localhost:5000/feedback/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fname,
        lname,
        email,
        police_station,
        date,
        message
          })
        })
    
        const data = await res.json();
        alert(data.message);
        window.location.reload();
      }

    const [lname, setLname] = useState(null);
    const [fname, setFname] = useState(null);
    const [police_station, setPoliceStation] = useState(null);
    const [date, setDate] = useState(null);
    const [message, setMessage] = useState(null);
    return (
        <div className="home-container">
            <Profile />
            <div className="home-stats">
                <div className="anonymous">
                    <p className='anonymous-title'>Feedback</p>
                    <div className="anonymous-body">
                    <table>
                    <tr>
                        <td><label className='fir-topic'>Officer's First Name:<span>*</span> </label></td>
                        <td ><input type="text" onChange={(e) => { setFname(e.target.value) }}/></td>
                        <td><label className='fir-topic'>Officer's Last Name:</label></td>
                        <td><input type="text" onChange={(e) => { setLname(e.target.value) }}/></td>
                    </tr>
                    <tr>
                        {/*<td><label className='fir-topic'>Police Station:<span>*</span></label></td>
                        <td><select id="cars" name="cars" className='fir-topic' style={{marginLeft:75, }}>
                            <option value="Kurla">Kurla</option>
                            <option value="Thane">Thane</option>
                            <option value="Mulund">Mulund</option>
                            <option value="Badlapur">Badlapur</option>
    </select></td>*/}
                        <td><label className='fir-topic'>Police Station:<span>*</span></label></td>
                        <td><input type="text" onChange={(e) => { setPoliceStation(e.target.value) }}/></td>
                        <td><label className='fir-topic'>Date:<span>*</span></label></td>
                        <td><input type="date" onChange={(e) => { setDate(e.target.value) }}/></td>
                    </tr>
                    <tr>
                        <td><label className='fir-topic'>Message:<span>*</span></label></td>
                        <td colSpan={3}><textarea name="" id="" rows="4" className='textarea' onChange={(e) => { setMessage(e.target.value) }}></textarea></td>
                    </tr>
                </table>
                <div className="anonymous-btnGroup">
                            <button>Reset</button>
                            <button onClick={submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Feedback;