import React, { useEffect, useState } from 'react'
import PoliceProfile from './PoliceProfile'
import "./css/home.css";
import "./css/fir.css"
import "./css/myFirDetails.css"
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
var CryptoJS = require('crypto-js');

const PoliceRobDetails = () => {
    const [cookies] = useCookies('user');
    if(!cookies.user){
        window.location.href = '/login';
    
    }
    else{
        var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    var email = decryptedData.email;
    }
    let { id } = useParams();
    const [fir, setFir] = useState({});
    useEffect(() => {
        getFirDetails();
    })
    async function makeOngoing() {
        let res = await fetch('http://localhost:5000/fir/updateStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                status: 'Ongoing'
            })
        })
        let data = await res.json();
        alert(data.message);
        res = await fetch('http://localhost:5000/fir/updatePoliceman', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                email
            })
        })
        alert(res.status);
        window.history.back();
    }
    async function makeResolved() {
        const res = await fetch('http://localhost:5000/fir/updateStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                status: 'Resolved'
            })
        })
        const data = await res.json();
        alert(data.message);
        window.history.back();
    }
    async function getFirDetails() {
        const res = await fetch('http://localhost:5000/fir/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id
            })
        })

        const data = await res.json();
        console.log(data);
        setFir(data);
    }

    return (
        <>
            <div className="home-container">
                <PoliceProfile />
                <div className="fir-wrap">
                    <p className='fir-title'>My FIR Details</p>
                    {Object.keys(fir).length>0 &&
                    <div className="fir-details-card">
                    <div className="fir-body">
                            <table className='myFIRDetail-table'>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Name: </label></td>
                                    <td colSpan={3}><p className='myfir-detail-value name'>{fir.fname} {fir.lname}</p></td>
                                </tr>
                                <tr className='myFIR-row'><td><label className='fir-topic'>Contact:</label></td>
                                    <td><p className='myfir-detail-value contact'>{fir.contact}</p></td>
                                    <td><label className='fir-topic'>Email ID:</label></td>
                                    <td><p className='myfir-detail-value email'>{fir.email}</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Type of FIR:</label></td>
                                    <td><p className='myfir-detail-value type'>{fir.complaint_type}</p></td>
                                    <td><label className='fir-topic'>Incident Date:</label></td>
                                    <td><p className='myfir-detail-value incident-date'>{fir.date}</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Address:</label></td>
                                    <td colSpan={3}><p className='myfir-detail-value address'>{fir.address}</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Complaint:</label></td>
                                    <td colSpan={3}><p className='myfir-detail-value complaint'>{fir.complaint}</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Police Station:</label></td>
                                    <td><p className='myfir-detail-value police-station'>{fir.police_station}</p></td>
                                    <td><label className='fir-topic'>Signature:</label></td>
                                    <td>
                                        <img className='myfir-detail-value sign-img' style={{maxHeight:"60px",minWidth:"150px"}} src={fir.image} alt="No Image" />
                                    </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>FIR Date:</label></td>
                                    <td><p className='myfir-detail-value fir-date'>{fir.createdAt}</p></td>
                                    <td><label className='fir-topic'>Status:</label></td>
                                    <td>
                                    <p className='myfir-detail-value status'>{fir.status}</p>
                                    </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td colSpan={4}>
                                        <p className='officer-details'>Officer's Details:</p>
                                </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Name:</label></td>
                                    <td><p className='myfir-detail-value officer-name'>Bajirao Singham</p></td>
                                    <td><label className='fir-topic'>Designation:</label></td>
                                    <td>
                                    <p className='myfir-detail-value officer-designation'>Inspector</p>
                                    </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Contact:</label></td>
                                    <td><p className='myfir-detail-value officer-contact'>7878787878</p></td>
                                    <td><label className='fir-topic'>Email ID:</label></td>
                                    <td>
                                    <p className='myfir-detail-value officer-email'>singham@gmail.com</p>
                                    </td>
                                </tr>
                            </table>


                            <div className="rob-btnGroup">
                        {fir.status === 'Ongoing' && <button onClick={makeResolved}>Take it to resolved</button>}
                        {fir.status === 'Resolved' && <button>Case Closed</button>}
                        {fir.status === 'Pending' && <button onClick={makeOngoing}>Take it under our surveillance</button>}
                    </div>

                        </div>
                    </div>
}{
    Object.keys(fir).length=0 && <p className='no-fir'>FIR Loading</p>
}
                </div>
            </div>
        </>
    );
}

export default PoliceRobDetails