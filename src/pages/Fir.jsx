import React,{useState} from 'react'
import Profile from './Profile';
import './css/home.css';
import './css/fir.css';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const Fir = () => {
    const [lname, setLname] = useState(null);
    const [fname, setFname] = useState(null);
    const [email, setEmail] = useState(null);
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState(null);
    const [police_station, setPoliceStation] = useState(null);
    const [date, setDate] = useState(null);
    const [complaint, setComplaint] = useState(null);
    const [complaint_type, setComplaintType] = useState(null);
    var image
  const [imagefire, setImagefire] = useState(null);
  async function uploadImage(id) {
    if (imagefire == null) return;
    const imgref = ref(storage, `images/${id}`);
    uploadBytes(imgref, imagefire).then(() => {
      getDownloadURL(imgref).then((url) => {
        image = url;
        updateImg(id);
      })
    })
  }
  async function updateImg(id) {
    const res = await fetch('http://localhost:5000/fir/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        image
      })
    })
    const data = await res.json();
    console.log(data);
    if (data.status === "ok") {
      console.log('created')
      alert('Fir Registered Successfully')
      window.location.reload();
    }
  }

  async function submitData() {
    console.log('submit')
    const res = await fetch('http://localhost:5000/fir/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        contact,
        address,
        police_station,
        date,
        complaint,
        complaint_type
      })
    })

    const data = await res.json();
    if (data.message === 'Fir Registered Successfully') {
      uploadImage(data.fir._id)
    }
  }

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
                                    <td ><input type="text" onChange={(e) => { setFname(e.target.value) }}/></td>
                                    <td><label className='fir-topic'>Last Name:<span>*</span></label></td>
                                    <td><input type="text" onChange={(e) => {setLname( e.target.value )}}/></td>
                                </tr>
                                <tr><td><label className='fir-topic'>Contact:<span>*</span></label></td>
                                    <td><input type="number" onChange={(e) => setContact(e.target.value) }/></td>
                                    <td><label className='fir-topic'>Email ID:<span>*</span></label></td>
                                    <td><input type="mail" onChange={(e) => {setEmail( e.target.value) }}/></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Type of FIR:<span>*</span></label></td>
                                    <td id='fir-type'><select name="type" className="fir-type-dropdown" onChange={(e) => { setComplaintType( e.target.value) }}>
                                        <option value="type">Select Type</option>
                                        <option value="Missing">Missing Person</option>
                                        <option value="Robbery">Robbery</option>
                                        <option value="Unidentified Objects">Unidentified Object</option>
                                        <option value="Accident">Traffic Accident</option>
                                        <option value="Murder">Murder</option>
                                        <option value="Drugs">Drugs</option>
                                        <option value="Others">Others</option>
                                    </select></td>
                                    <td><label className='fir-topic'>Incident Date:<span>*</span></label></td>
                                    <td><input type="date" onChange={(e) => {setDate( e.target.value )}}/></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Address:<span>*</span></label></td>
                                    <td colSpan={3}><textarea onChange={(e) => {setAddress( e.target.value )}} name="" id="" rows="4" className='textarea'></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Complaint:<span>*</span></label></td>
                                    <td colSpan={3}><textarea onChange={(e) => {setComplaint( e.target.value) }} name="" id="" rows="4" className='textarea'></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className='fir-topic'>Police Station:<span>*</span></label></td>
                                    <td><input type='text' onChange={(e) => {setPoliceStation( e.target.value )}}/></td>
                                    <td> <label className='fir-topic'>Upload Signature:<span>*</span></label></td>
                                    <td>
                                        <input type="file" onChange={(e) => { setImagefire(e.target.files[0]) }}/>
                                    </td>
                                </tr>
                            </table>

                            <div className="fir-confirmation">
                                <input type="checkbox" />
                                <p className='fir-confirm-text'>I  certify that the information provided by me in above form is accurate and correct as per best of my knowledge. I understand that withholding of information or giving false information is a criminal offense and may result in legal action against me.</p>
                            </div>
                            <div className="fir-btnGroup">
                                <button>Reset</button>
                                <button onClick={submitData}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fir