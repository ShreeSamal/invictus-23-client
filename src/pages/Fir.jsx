import React from 'react'
import Profile from './Profile';
import './css/home.css';
import './css/fir.css';
const Fir = () => {
    return (
        <>
            <div className="home-container">
                <Profile />
                <div className='home-stats'>
                    <div className="fir-wrap">
                        <p className='fir-title'>File FIR</p>
                        <div className="fir-body">
                            <table>
                                <tr>
                                    <td><label className='fir-topic'>First Name:<span>*</span> </label></td>
                                    <td ><input type="text" /></td>
                                    <td><label className='fir-topic'>Last Name:<span>*</span></label></td>
                                    <td><input type="text" /></td>
                                </tr>
                                <tr><td><label className='fir-topic'>Contact:<span>*</span></label></td>
                                    <td><input type="number" /></td>
                                    <td><label className='fir-topic'>Email ID:<span>*</span></label></td>
                                    <td><input type="mail" /></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Type of FIR:<span>*</span></label></td>
                                    <td id='fir-type'><select name="type" className="fir-type-dropdown">
                                        <option value="type">Select Type</option>
                                        <option value="missing">Missing Person</option>
                                        <option value="rob">Robbery</option>
                                        <option value="unidentified">Unidentified Object</option>
                                        <option value="accident">Traffic Accident</option>
                                        <option value="murder">Murder</option>
                                        <option value="drugs">Drugs</option>
                                        <option value="others">Others</option>
                                    </select></td>
                                    <td><label className='fir-topic'>Incident Date:<span>*</span></label></td>
                                    <td><input type="date" /></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Address:<span>*</span></label></td>
                                    <td colSpan={3}><textarea name="" id="" rows="4" className='textarea'></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Complaint:<span>*</span></label></td>
                                    <td colSpan={3}><textarea name="" id="" rows="4" className='textarea'></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Police Station:<span>*</span></label></td>
                                    <td><input type='text' /></td>
                                    <td> <label className='fir-topic'>Upload Signature:<span>*</span></label></td>
                                    <td>
                                        <input type="file" />
                                    </td>
                                </tr>
                            </table>

                            <div className="fir-confirmation">
                                <input type="checkbox" />
                                <p className='fir-confirm-text'>I  certify that the information provided by me in above form is accurate and correct as per best of my knowledge. I understand that withholding of information or giving false information is a criminal offense and may result in legal action against me.</p>
                            </div>
                            <div className="fir-btnGroup">
                                <button>Reset</button>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fir