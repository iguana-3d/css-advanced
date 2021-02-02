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
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tour for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam animi voluptas optio ratione recusandae, quo illo. Assumenda et esse rem ut, aspernatur consequuntur. Corrupti unde praesentium voluptatum iure laudantium?
                            </p>
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Like adventures like you never have before
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam animi voluptas optio ratione recusandae, quo illo.
                            </p>
                            <a href="#" className="btn-text">
                                Learn more &rarr;
                            </a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="/static/images/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1"/>
                                <img src="/static/images/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2"/>
                                <img src="/static/images/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Explore the world
                                    </h3>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam
                                    </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Meet nature
                                    </h3>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam
                                    </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-map"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Find your way
                                    </h3>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam
                                    </p>
                            </div>
                        </div>
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        Live a healthier life
                                    </h3>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam
                                    </p>
                            </div>
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