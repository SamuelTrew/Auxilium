import React from 'react';

const Dyslexia = () => {
    return (
        <>
            <div className="container" style={{marginBottom: '5%', marginTop: '8%'}}>
                <h1 className="section-heading">Dyslexia</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                        <h4 className="is-black-text" style={{margin: '10px', marginLeft: '0'}}>
                            Designing for the masses isn't enough.
                        </h4>
                        <p className="is-black-text">
                        Here we need an awesome sentence about this shit.
                        </p>
                        <p className="is-black-text">
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