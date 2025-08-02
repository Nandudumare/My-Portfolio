import React, { useContext, useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { GiGraduateCap,GiEarthAmerica ,GiSkills} from "react-icons/gi"

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const StyledDrawer = styled(Drawer)(({ theme: muiTheme }) => ({
        '& .MuiDrawer-paper': {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [muiTheme.breakpoints.down('sm')]: {
                width: '12em',
            },
        }
    }));

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <IoMenuSharp
                    style={{
                        fontSize: '2.5rem',
                        color: theme.tertiary,
                        cursor: 'pointer',
                        transform: 'translateY(-10px)',
                        transition: 'color 0.3s',
                    }}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <StyledDrawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            color: theme.primary,
                            position: 'absolute',
                            right: 40,
                            top: 40,
                            transition: 'color 0.2s',
                        }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <div data-aos="fade-left">
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={{
                                    margin: '2rem auto',
                                    borderRadius: '78.8418px',
                                    background: theme.secondary,
                                    color: theme.primary,
                                    width: '85%',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    padding: '0 30px',
                                    boxSizing: 'border-box',
                                    border: '2px solid',
                                    borderColor: theme.primary,
                                    transition: 'background-color 0.2s, color 0.2s',
                                }}>
                                    <IoHomeSharp style={{ fontSize: '1.6rem' }} />
                                    <span style={{
                                        fontFamily: 'var(--primaryFont)',
                                        width: '50%',
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                    }}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div data-aos="fade-left">
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={{
                                    margin: '2rem auto',
                                    borderRadius: '78.8418px',
                                    background: theme.secondary,
                                    color: theme.primary,
                                    width: '85%',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    padding: '0 30px',
                                    boxSizing: 'border-box',
                                    border: '2px solid',
                                    borderColor: theme.primary,
                                    transition: 'background-color 0.2s, color 0.2s',
                                }}>
                                    <FaUser style={{ fontSize: '1.6rem' }} />
                                    <span style={{
                                        fontFamily: 'var(--primaryFont)',
                                        width: '50%',
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                    }}>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div data-aos="fade-left">
                            <NavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={{
                                    margin: '2rem auto',
                                    borderRadius: '78.8418px',
                                    background: theme.secondary,
                                    color: theme.primary,
                                    width: '85%',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    padding: '0 30px',
                                    boxSizing: 'border-box',
                                    border: '2px solid',
                                    borderColor: theme.primary,
                                    transition: 'background-color 0.2s, color 0.2s',
                                }}>
                                    <GiEarthAmerica style={{ fontSize: '1.6rem' }} />
                                    <span style={{
                                        fontFamily: 'var(--primaryFont)',
                                        width: '50%',
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                    }}>
                                        Projects
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        <div data-aos="fade-left">
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div style={{
                                    margin: '2rem auto',
                                    borderRadius: '78.8418px',
                                    background: theme.secondary,
                                    color: theme.primary,
                                    width: '85%',
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly',
                                    padding: '0 30px',
                                    boxSizing: 'border-box',
                                    border: '2px solid',
                                    borderColor: theme.primary,
                                    transition: 'background-color 0.2s, color 0.2s',
                                }}>
                                    <MdPhone style={{ fontSize: '1.6rem' }} />
                                    <span style={{
                                        fontFamily: 'var(--primaryFont)',
                                        width: '50%',
                                        fontSize: '1.3rem',
                                        fontWeight: 600,
                                    }}>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </StyledDrawer>
        </div>
    );
}

export default Navbar;
