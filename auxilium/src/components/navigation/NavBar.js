import React from 'react';
// import Logo from "../Logo";
import Logo from "../../images/logo.svg";

// import Fsharp from '../images/icons/skillIcons/technicalSkills/fsharp.svg';

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
        </nav>
        </>
    );
}

export default navbar;

