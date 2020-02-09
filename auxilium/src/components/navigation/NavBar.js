import React from 'react';
// import Logo from "../Logo";
import Logo from "../../images/logo.svg";

const urls = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/dyslexia",
        name: "Learn"
    },
    {
        path: "/comparisons",
        name: "Comparisons"
    },
    {
        path: "https://github.com/SamuelTrew/ICHACK20",
        name: "Chrome Extension"
    }
]

const navbar = () => {
    return (
        <>
        <nav className="heightOffset navbar">
            <div className="innerContainer" >
                <img src={Logo} style={{height: '60px',margin: '0px'}}/>
                <div className="nav">
                    {urls.map(({ path, name }) => (
                      <a className="navLinks" href={path}>
                          <div style={{display:'flex', alignItems:"center"}}>
                            <span>
                                {name}
                            </span>
                          </div>
                      </a>
                    ))}
                </div>
            </div>
        </nav>
        </>
    );
}

export default navbar;

