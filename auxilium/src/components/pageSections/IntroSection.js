import React from 'react';

const IntroSection = () => {
    return (
        <>
            <div className="container" style={{marginTop: '8%'}}>
                <h1 className="is-very-dark-grey-text section-heading">Building an inclusive web.</h1>
                <div className="container__row section-container">
                    <div className="container__col-sm-12">
                    <h2 className="is-black-text highlight" style={{margin: '10px', marginLeft: '0'}}>        
                        <span role="img" aria-label="nerd emoji">👩🏽‍💻</span>
                        Web developers aren't typically trained to think about disabled populations.
                    </h2>
                        <br/>
                        <p className="is-dark-grey-text">
                        The internet can be a hostile space for 15% of the world's population who experience some form of disability.
                        </p>
                        <p className="is-dark-grey-text">
                        Try navigating a website as someone who is visually impaired: Turn on voice command on your computer and go to Amazon's store. You'll quickly find out that those who rely on voice commands can't skip around and are doomed to listen to every notation about every page element before getting to the one piece of information they need. A 2016 Pew Research survey found that only 40% of disabled Americans feel comfortable using the internet compared to 80% of able-bodied users. In the UK, less than 30% are online. <span role="img" aria-label="nerd emoji">😢</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IntroSection;