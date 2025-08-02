import React, { useContext } from "react";
import { Button } from "@mui/material";
import { NavHashLink as NavLink } from "react-router-hash-link";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}
            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="YouTube"
                />
              </a>
            )}
            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Blogger"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p style={{ textAlign: "justify" }}>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button 
                    style={{
                      color: theme.primary,
                      borderRadius: "30px",
                      textTransform: "inherit",
                      textDecoration: "none",
                      width: "150px",
                      fontSize: "1rem",
                      fontWeight: "500",
                      height: "50px",
                      fontFamily: "var(--primaryFont)",
                      border: `3px solid ${theme.primary}`,
                      transition: "100ms ease-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = theme.tertiary;
                      e.target.style.color = theme.secondary;
                      e.target.style.border = `3px solid ${theme.tertiary}`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = theme.primary;
                      e.target.style.border = `3px solid ${theme.primary}`;
                    }}
                  >
                    Resume
                  </Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button 
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    borderRadius: "30px",
                    textTransform: "inherit",
                    textDecoration: "none",
                    width: "150px",
                    height: "50px",
                    fontSize: "1rem",
                    fontWeight: "500",
                    fontFamily: "var(--primaryFont)",
                    border: `3px solid ${theme.primary}`,
                    transition: "100ms ease-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = theme.secondary;
                    e.target.style.color = theme.tertiary;
                    e.target.style.border = `3px solid ${theme.tertiary}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = theme.primary;
                    e.target.style.color = theme.secondary;
                    e.target.style.border = `3px solid ${theme.primary}`;
                  }}
                >
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
