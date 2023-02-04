import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import "./css/home.css";
import "./css/fir.css"
import "./css/myFirDetails.css"
import { useParams } from 'react-router-dom';

const MyFirDetails = () => {
    let { id } = useParams();
    const [fir, setFir] = useState({});
    useEffect(() => {
        getFirDetails();
    })
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
                <Profile />
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
                                <p className='officer-details'></p>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Name:</label></td>
                                    <td><p className='myfir-detail-value officer-name'>Mikil Lalwani</p></td>
                                    <td><label className='fir-topic'>Designation:</label></td>
                                    <td>
                                    <p className='myfir-detail-value officer-designation'>IPS Officer</p>
                                    </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Contact:</label></td>
                                    <td><p className='myfir-detail-value officer-contact'>9638527410</p></td>
                                    <td><label className='fir-topic'>Email ID:</label></td>
                                    <td>
                                    <p className='myfir-detail-value officer-email'>2020.mikil.lalwani@ves.ac.in</p>
                                    </td>
                                </tr>
                            </table>

                            
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

export default MyFirDetails