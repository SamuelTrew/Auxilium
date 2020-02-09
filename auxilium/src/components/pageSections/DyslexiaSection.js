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
                        Here we need an awesome sentence about this shit.
                        </p>
                        <p className="is-very-dark-text">
                        Maybe another one: Here we need an awesome sentence about this shit.
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

export default Dyslexia;