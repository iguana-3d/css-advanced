import React from 'react';

export default function Header(){
    return(
        <>
            <header className="header">
                <div className="header__logo-box">
                    <img src="/static/images/logo-white.png" alt="logo" className="header__logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>
                    <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
                </div>            
            </header>
            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-8">
                        <h2 className="heading-secondary">
                            Exciting tour for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            Text Content
                        </div>
                        <div className="col-1-of-2">
                            Image composition
                        </div>
                    </div>
                </section>
            </main>

            {/* <section className="grid-test">
                <div className="row">
                    <div className="col-1-of-2">
                        col 1 of 2
                    </div>
                    <div className="col-1-of-2">
                        col 1 of 2
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        col 1 of 3
                    </div>
                    <div className="col-2-of-3">
                        col 2 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-2-of-4">
                        col 2 of 4
                    </div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">
                        col 1 of 4
                    </div>
                    <div className="col-3-of-4">
                        col 3 of 4
                    </div>
                </div>
            </section> */}
        </>
    );
}