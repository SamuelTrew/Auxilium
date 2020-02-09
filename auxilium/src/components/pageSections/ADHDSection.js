import React from 'react';

const ADHD = () => {
    return (
        <>
            <div className="container" style={{marginBottom: '5%', marginTop: '8%'}}>
                <h1 className="section-heading is-very-dark-text">ADHD/ADD</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                        <h4 className="is-very-dark-text" style={{margin: '10px', marginLeft: '0'}}>
                            Want to talk?
                        </h4>
                        <p className="is-very-dark-text">
                        Use the form below if you want to make a request for a new project, website, tutoring, or personal statement advice! Let's see what your vision is and build something awesome together <span role="img" aria-label="smiling emoji">😊</span>.
                        </p>
                        <p className="is-very-dark-text">
                            Something else? If you're looking for someone to join your team with new energy, ideas and skills for a placement or internship - let's talk! <span role="img" aria-label="nerd emoji">🤓</span>
                        </p>

                        <a id="dyslexia-link"className="button" href="/dyslexia" style={{cursor: "pointer"}}>
                            <span>Click me</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ADHD;