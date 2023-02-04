import React, { useEffect, useState } from 'react';
import './css/fir.css';
import './css/policerob.css';
import PoliceProfile from './PoliceProfile'
import { useNavigate, useParams } from 'react-router';
const PoliceRob = () => {
    let {category} = useParams();
    const [fir,setFir] = useState([]);
    var navigate = useNavigate()
    var viewDetail = (id) => {
        navigate(`/police/cases/rob/detail/${id}`)
    }
    async function getCrimes(){
        const res = await fetch(`http://localhost:5000/fir/get/${category}`);
        const data = await res.json();
        setFir(data);
    }
    useEffect(() => {
        getCrimes();
    },[])
    var draggables = document.querySelectorAll('.draggable')
    var containers = document.querySelectorAll('.container')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                container.appendChild(draggable)
            } else {
                container.insertBefore(draggable, afterElement)
            }
        })
    })

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }
    return (
        <>
            <div className="home-container">
                <PoliceProfile />
                <div className='home-stats'>
                    <p className='fir-title'>Robbery</p>
                    <div className="big-container">
                        <div className="container robpending">
                            <h1 className='rob-pending'>Pending</h1>
                            {fir.length > 0 && fir.map((f) => {
                            if(f.status === 'Pending'){
                                return(
                            <div className="draggable">
                                <h1 className='rob-name'>{f.fname} {f.lname}</h1>
                                <h1 className='rob-police-loc'>{f.address}</h1>
                                <h1 className='rob-fir-date'>{f.date.slice(0,10)}</h1>
                                <button onClick={()=>viewDetail(f._id)} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>)
                            }
    })}
                        </div>
                        <div className="container robonging">
                        <h1 className='rob-ongoing'>Ongoing</h1>
                        {fir.length > 0 && fir.map((f) => {
                            if(f.status === 'Ongoing'){
                                return(
                            <div className="draggable">
                                <h1 className='rob-name'>{f.fname} {f.lname}</h1>
                                <h1 className='rob-police-loc'>{f.address}</h1>
                                <h1 className='rob-fir-date'>{f.date.slice(0,10)}</h1>
                                <button onClick={()=>viewDetail(f._id)} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                                )
                            }
    })}
                        </div>
                        <div className="container robdone">
                        <h1 className='rob-completed'>Completed</h1>
                        {fir.length > 0 && fir.map((f) => {
                            if(f.status === 'Resolved'){
                                return(
                            <div className="draggable">
                                <h1 className='rob-name'>{f.fname} {f.lname}</h1>
                                <h1 className='rob-police-loc'>{f.address}</h1>
                                <h1 className='rob-fir-date'>{f.date.slice(0,10)}</h1>
                                <button onClick={()=>viewDetail(f._id)} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                                )
                            }
    })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PoliceRob