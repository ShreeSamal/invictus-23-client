import React from "react";
import './css/feedback.css';
import './css/home.css'
import './css/anonymous.css'
import Profile from "./Profile";
const Feedback = () => {
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
                        <td ><input type="text" /></td>
                        <td><label className='fir-topic'>Officer's Last Name:</label></td>
                        <td><input type="text" /></td>
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
                        <td><input type="text" /></td>
                        <td><label className='fir-topic'>Date:<span>*</span></label></td>
                        <td><input type="date" /></td>
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

};

export default Feedback;