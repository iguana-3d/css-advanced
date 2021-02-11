import React from 'react';
import Navigation from './navigation';
import SectionBook from './sectionBook';
import Footer from './footer';
import Popup from './popup';

export default function Header(){
    return(
        <>
        <Navigation />
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
                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Most popular tours
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            The Sea Explorer
                                        </span>                                        
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tour</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Dificulty: eazy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$297</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            The Forest Hiker
                                        </span>                                        
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 day tour</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Dificulty: medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$497</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            The Snow Adventurer
                                        </span>                                        
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 day tour</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Dificulty: hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$897</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="u-center-text u-margin-top-huge">
                        <a href="#" className="btn btn--green">Discover all tours</a>
                    </div>
                </section>
                <section className="section-stories">
                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay muted loop>
                            <source src="/static/videos/video.mp4" type="video/mp4" />
                            <source src="/static/videos/video.webm" type="video/webm" />
                            Your browser is not suported!  
                        </video>
                    </div>
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img src="/static/images/nat-8.jpg" alt="Person on a tour" className="story__img" />
                                <figcaption className="story__caption">
                                    Mary Smith
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    I had the best week ever with my family
                                </h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati provident quidem deserunt ipsum in porro distinctio mollitia ab rem atque cumque velit culpa adipisci labore, accusantium omnis, similique saepe!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img src="/static/images/nat-9.jpg" alt="Person on a tour" className="story__img" />
                                <figcaption className="story__caption">
                                    Jack Wilson
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    WOW! My life is complete difference now
                                </h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati provident quidem deserunt ipsum in porro distinctio mollitia ab rem atque cumque velit culpa adipisci labore, accusantium omnis, similique saepe!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="u-center-text u-margin-top-huge">
                        <a href="#" className="btn-text">Read all stories &rarr;</a>
                    </div>
                </section>
                <SectionBook />
            </main>
            <Footer />
            <Popup />
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