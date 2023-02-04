import React from 'react';
import Profile from './Profile';
import './css/home.css';
import './css/anonymous.css';

const Anonymous = () => {
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
                                <td id='anonymous-type'><select name="type" className="anonymous-type-dropdown">
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
                                <td><input type="date" /></td>
                            </tr>
                            <tr>
                                <td><label className='anonymous-topic'>Incident Location:<span>*</span></label></td>
                                <td><input type="mail" /></td>
                                <td><label className='anonymous-topic'>Police Station:<span>*</span></label></td>
                                <td><input type="mail" /></td>
                            </tr>
                            <tr>
                                <td><label className='anonymous-topic'>Description:<span>*</span></label></td>
                                <td colSpan={3}><textarea name="" id="" rows="4" className='textarea'></textarea></td>
                            </tr>

                        </table>
                        <div className="anonymous-text">
                            <p>Your Identity will be hidden from everyone.</p>
                        </div>
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

export default Anonymous