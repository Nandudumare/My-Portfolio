import React, { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    const { theme } = useContext(ThemeContext);
    return (
        <div data-aos="fade-up">
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-content"  style={{color:theme.tertiary}}>
                    <i className="service-icon">{icon}</i>
                    <h4  style={{color:theme.tertiary}}>{title}</h4>  
                </div>         
            </div>
        </div>
    )
}

export default SingleService
