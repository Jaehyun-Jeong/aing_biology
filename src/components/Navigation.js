import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="header">
            <div id="gnb">
                <div className="logo">
                    <Link to="/" alt="apple watch">
                        <div className="logo__image"></div>
                        <span>WATCH</span>
                    </Link>
                </div>
                <div className="nav">
                    <div className="nav__item">
                        <Link to="/feature">Feature</Link>
                        <div className="arrow"></div>
                    </div>
                    <div className="nav__item">
                        <Link to="/product">Product</Link>
                        <div className="arrow"></div>
                    </div>
                    <div className="nav__item">
                        <Link to="/video">Video</Link>
                        <div className="arrow"></div>
                    </div>
                    <div className="nav__item">
                        <Link to="/testimonial">Testimonial</Link>
                        <div className="arrow"></div>
                    </div>
                </div>
                <div className="buy">
                    <Link to="/buynow">
                        <div className=""></div>
                        <div id="buy__btn">
                            <span>Buy Now</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;