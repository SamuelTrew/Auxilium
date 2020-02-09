import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';

const ADHD = () => {
    return (
        <>
            <div className="container" style={{marginBottom: '5%', marginTop: '8%'}}>
                <h1 className="section-heading is-very-dark-text">ADHD/ADD</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                        <h4 className="is-very-dark-text" style={{margin: '10px', marginLeft: '0'}}>
                            Vision for Learning disabilities.
                        </h4>
                        <p className="is-very-dark-text">
                            Do you suffer from not being able to read large blocks of text or extract key data points from passages?
                        </p>
                        <p className="is-very-dark-text">
                            We have a tool that can help make staying focused on your browsing session easier while giving
                            you sight into more information than before.
                        </p>

                        <a id="github" className="button" href="https://github.com/SamuelTrew/ICHACK20" style={{cursor: "pointer"}}>
                            <span>GitHub</span>
                        </a>

                        <a id="vision-link" className="button" href="/vision" style={{cursor: "pointer", marginLeft: 8}}>
                            <span>Vision</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ADHD;