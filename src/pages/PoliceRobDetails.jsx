import React from 'react'
import PoliceProfile from './PoliceProfile'
import "./css/home.css";
import "./css/fir.css"
import "./css/myFirDetails.css"

const PoliceRobDetails = () => {
  return (
    <>
            <div className="home-container">
                <PoliceProfile />
                <div className="fir-wrap">
                    <p className='fir-title'>FIR Details</p>
                    <div className="fir-details-card">
                    <div className="fir-body">
                            <table className='myFIRDetail-table'>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Name: </label></td>
                                    <td colSpan={3}><p className='myfir-detail-value name'>Nilay Pophalkar</p></td>
                                </tr>
                                <tr className='myFIR-row'><td><label className='fir-topic'>Contact:</label></td>
                                    <td><p className='myfir-detail-value contact'>9876543210</p></td>
                                    <td><label className='fir-topic'>Email ID:</label></td>
                                    <td><p className='myfir-detail-value email'>2020.shree.samal@ves.ac.in</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Type of FIR:</label></td>
                                    <td><p className='myfir-detail-value type'>Robbery</p></td>
                                    <td><label className='fir-topic'>Incident Date:</label></td>
                                    <td><p className='myfir-detail-value incident-date'>04-02-2023</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Address:</label></td>
                                    <td colSpan={3}><p className='myfir-detail-value address'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, explicabo!</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Complaint:</label></td>
                                    <td colSpan={3}><p className='myfir-detail-value complaint'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, explicabo!</p></td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>Police Station:</label></td>
                                    <td><p className='myfir-detail-value police-station'>Mulund</p></td>
                                    <td><label className='fir-topic'>Signature:</label></td>
                                    <td>
                                        <img className='myfir-detail-value sign-img' src="" alt="" />
                                    </td>
                                </tr>
                                <tr className='myFIR-row'>
                                    <td><label className='fir-topic'>FIR Date:</label></td>
                                    <td><p className='myfir-detail-value fir-date'>04-02-2023</p></td>
                                    <td><label className='fir-topic'>Status:</label></td>
                                    <td>
                                    <p className='myfir-detail-value status'>Pending</p>
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
                </div>
            </div>
        </>
  )
}

export default PoliceRobDetails