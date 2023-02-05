import React from 'react'
import AdminProfile from './AdminProfile'
import './css/feedback.css';
import './css/home.css'
import './css/anonymous.css'
export default function AdminAddOfficers() {
  return (
    <div className="home-container">
            <AdminProfile />
            <div className="home-stats">
                <div className="anonymous">
                    <p className='anonymous-title'>Add Officers</p>
                    <div className="anonymous-body">
                    <table>
                    <tr>
                        <td><label className='fir-topic'>Officer's First Name:<span>*</span> </label></td>
                        <td ><input type="text"/></td>
                        <td><label className='fir-topic'>Officer's Last Name:</label></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><label className='fir-topic'>Contact No:<span>*</span></label></td>
                        <td><input type="text" /></td>
                        <td><label className='fir-topic'>Email ID:<span>*</span></label></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><label className='fir-topic'>Police Station:<span>*</span></label></td>
                        <td><input type="text" /></td>
                        <td><label className='fir-topic'>Designation:<span>*</span></label></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td><label className='fir-topic'>Message:<span>*</span></label></td>
                        <td colSpan={3}><textarea name="" id="" rows="4" className='textarea'></textarea></td>
                    </tr>
                </table>
                <div className="anonymous-btnGroup">
                            <button>Reset</button>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
