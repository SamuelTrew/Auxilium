import React from 'react';
// import Logo from "../Logo";

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
                {/* <Logo/> */}
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

