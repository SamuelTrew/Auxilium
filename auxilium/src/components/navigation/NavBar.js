import React from 'react';
// import Logo from "../Logo";
import Logo from "../../images/logo.svg";

const urls = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/comparisons",
        name: "Comparisons"
    },
    {
        path: "/test",
        name: "Test"
    },
    {
        path: "/dyslexia",
        name: "Learn"
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
                <a href="/">
                    <img src={Logo} className="logo" />
                </a>
                <div className="nav">
                    {urls.map(({ path, name }) => (
                      <a className="navLinks" key={path} href={path}>
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

