import React from 'react';

const Dyslexia = () => {
    return (
        <>
            <div className="container" style={{marginBottom: '5%', marginTop: '8%'}}>
                <h1 className="section-heading is-very-dark-text">Dyslexia</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                        <h4 className="is-very-dark-text" style={{margin: '10px', marginLeft: '0'}}>
                            Designing for the masses isn't enough.
                        </h4>
                        <p className="is-very-dark-text">
                        Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). 🔠
                        </p>
                        <p className="is-very-dark-text">
                        Reading is a pretty fundamental part of the web experience. Designers, engineers, and developers should consider this fraction of their user-base in their design process. Unfortunately, this typically not the case. 😞
                        </p>
                        <p className="is-very-dark-text">
                        It is difficult to justify ignoring 15% of your userbase. Auxilium is the first step in the right direction. 👍
                        </p>
                        
                        <a id="dyslexia-link" className="button" href="/dyslexia" style={{cursor: "pointer"}}>
                            <span>Learn</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dyslexia;