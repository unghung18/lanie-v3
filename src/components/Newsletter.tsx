import React from 'react';
import '../styles/Newsletter.scss';

const Newsletter = () => {
    return (
        <section className="newsletter container">
            <div className="newsletter__container">
                <div className="newsletter__container--heading">
                    Sign up and get 10% off
                </div>
                <div className="newsletter__container--text">
                    Sign up for early sale access, new in, promotions and more
                </div>
                <div className="newsletter__container--input">
                    <form>
                        <input type="text" name="newsletter" placeholder='Enter your email' />
                        <button className='button'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter