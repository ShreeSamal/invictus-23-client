import React from 'react';
import './css/policecases.css';
import './css/home.css';
import './css/fir.css';
import PoliceProfile from './PoliceProfile'
import { Link } from 'react-router-dom';
const PoliceCases = () => {
    return (
        <>
            <div className="home-container">
                <PoliceProfile />
                <div className='home-stats'>
                    <p className='fir-title'>Cases/FIRs</p>
                    <div className="case-cards-wrap">
                        <Link className="cases-card" to='/police/cases/rob' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/missing-person.jpeg" alt="" />
                            <p className='cases-title'>Missing</p>
                        </Link>
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/robbery.PNG" alt="" />
                            <p className='cases-title'>Robbery</p>
                        </Link>
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/car-accident.jpeg" alt="" />
                            <p className='cases-title'>Accidents</p>
                        </Link>
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/drug.jpeg" alt="" />
                            <p className='cases-title'>Drugs</p>
                        </Link>
                    </div>
                    <div className="case-cards-wrap">
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/unidentified-object.jpeg" alt="" />
                            <p className='cases-title'>Unidentified Objects</p>
                        </Link>
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/murder.jpeg" alt="" />
                            <p className='cases-title'>Murder</p>
                        </Link>
                        <Link className="cases-card" to='#' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/others.jpeg" alt="" />
                            <p className='cases-title'>Others</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PoliceCases