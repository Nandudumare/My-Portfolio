import React, { useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    const { theme } = useContext(ThemeContext);



    return (
        <div data-aos="fade-up">
            <div key={id} className="education-card" 
                style={{
                    backgroundColor: theme.primary30,
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = theme.primary50;
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = theme.primary30;
                }}
            >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                </div>
            </div>
        </div>        
    )
}

export default EducationCard
