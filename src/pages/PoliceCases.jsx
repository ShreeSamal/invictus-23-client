import React from 'react';
import './css/policecases.css';
import './css/home.css';
import './css/fir.css';
import PoliceProfile from './PoliceProfile'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const PoliceCases = () => {
    const [cookies] = useCookies('user');
    if (cookies.user) {
        window.location.href = '/login';
    }
    return (
        <>
            <div className="home-container">
                <PoliceProfile />
                <div className='home-stats'>
                    <p className='fir-title'>Cases/FIRs</p>
                    <div className="case-cards-wrap">
                        <Link className="cases-card" to='/police/cases/Missing' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/missing-person.jpeg" alt="" />
                            <p className='cases-title'>Missing</p>
                        </Link>
                        <Link className="cases-card" to='/police/cases/Robbery' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/robbery.PNG" alt="" />
                            <p className='cases-title'>Robbery</p>
                        </Link>
                        <Link className="cases-card" to='/police/cases/Accidents' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/car-accident.jpeg" alt="" />
                            <p className='cases-title'>Accidents</p>
                        </Link>
                        <Link className="cases-card" to='/police/cases/Drugs' style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/drug.jpeg" alt="" />
                            <p className='cases-title'>Drugs</p>
                        </Link>
                    </div>
                    <div className="case-cards-wrap">
                        <Link className="cases-card" to='/police/cases/Unidentified Objects'style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/unidentified-object.jpeg" alt="" />
                            <p className='cases-title'>Unidentified Objects</p>
                        </Link>
                        <Link className="cases-card" to='/police/cases/Murder'style={{ textDecoration: 'none' }}>
                            <img className='cases-card-img' src="/images/murder.jpeg" alt="" />
                            <p className='cases-title'>Murder</p>
                        </Link>
                        <Link className="cases-card" to='/police/cases/Others'style={{ textDecoration: 'none' }}>
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