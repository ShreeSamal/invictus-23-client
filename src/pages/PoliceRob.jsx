import React from 'react';
import './css/fir.css';
import './css/policerob.css';
import PoliceProfile from './PoliceProfile'
import { useNavigate } from 'react-router';
const PoliceRob = () => {
    var navigate = useNavigate()
    var viewDetail = () => {
        navigate('/police/cases/rob/detail')
    }

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
                            <div className="draggable" >
                                <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                            <div className="draggable" >
                                <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                        </div>
                        <div className="container robonging">
                        <h1 className='rob-ongoing'>Ongoing</h1>
                            <div className="draggable" >
                            <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                            <div className="draggable" >
                            <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                        </div>
                        <div className="container robdone">
                        <h1 className='rob-completed'>Completed</h1>
                            <div className="draggable" >
                                <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                            <div className="draggable" >
                            <h1 className='rob-name'>Nilay Pophalkar</h1>
                                <h1 className='rob-police-loc'>Thane</h1>
                                <h1 className='rob-fir-date'>04-02-2023</h1>
                                <button onClick={viewDetail} className='myfir-btn'><i className="bi bi-box-arrow-up-right icon"></i><span>View</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PoliceRob