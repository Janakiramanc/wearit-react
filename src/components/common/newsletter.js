import React from 'react';

const  Newsletter = (props)=>{
    let prodPageCls = props.sourcePageProduct ? "newsletter mt-0" : "mt-0";
    return(
        <section className={prodPageCls}>
        <div className="newsletter__container">
            <h2 className="newsletter__title text-center">Subscribe for Our Newsletter</h2>
            <p className="newsletter__info text-center">We won't send any kind of spam</p>
            <div className="newsletter__content">
                <input type="text" className="newsletter__textbox rounded-pill" placeholder="Email address" />
                <button type="button" className="btn btn--blue btn__medium rounded-pill" aria-label="Right Align">Get Started</button>
            </div>
        </div>
    </section>
    )
}

export default Newsletter;