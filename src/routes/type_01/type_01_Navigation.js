import React from 'react';
import { Link } from 'react-router-dom';
import './type_01_Navigation.css';

function Navigation() {
  return (
    <div className="type_01_header">
      <div id="type_01_gnb">
        <div className="type_01_logo">
          <Link to="/" alt="apple watch">
            <div className="type_01_logo__image"></div>
            <span>WATCH</span>
          </Link>
        </div>
        <div className="type_01_nav">
          <div className="type_01_nav__item">
            <Link to="/type_01">Feature</Link>
            <div className="type_01_arrow"></div>
          </div>
          <div className="type_01_nav__item">
            <Link to="/type_01">Product</Link>
            <div className="type_01_arrow"></div>
          </div>
          <div className="type_01_nav__item">
            <Link to="/type_01">Video</Link>
            <div className="type_01_arrow"></div>
          </div>
          <div className="type_01_nav__item">
            <Link to="/type_01">Testimonial</Link>
            <div className="type_01_arrow"></div>
          </div>
        </div>
        <div className="type_01_buy">
          <Link to="/type_01">
            <div id="type_01_nav__buy__btn">
              <span>Buy Now</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;