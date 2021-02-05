import React from 'react';

export default function SectionBook(){
    return(
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">
                                    Start booking now
                                </h2>
                            </div>
                            <div className="form__group">
                                <input type="text" className="form__input" id="name" placeholder="Full name" required/>
                                <label htmlFor="name" className="form__label">Full name</label>    
                            </div>
                            <div className="form__group">
                                <input type="email" className="form__input" id="email" placeholder="Email address" required/>
                                <label htmlFor="email" className="form__label">Email address</label>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}