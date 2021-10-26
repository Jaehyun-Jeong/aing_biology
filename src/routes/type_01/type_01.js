import React from "react";
import { Link } from 'react-router-dom';
import Navigation from './type_01_Navigation';
import "./type_01.css";

class type_01 extends React.Component {
  state = {
    is_loading: true
  };
  componentDidMount() {
    this.setState({ is_loading: false })
  }
  render() {
    const { is_loading } = this.state;
    return (
      <React.Fragment>
        <div id="type_01">
          <Navigation />
          <section id="type_01_container">
            {is_loading ?
              (
                <div className="type_01_loader" >
                  <span className="type_01_loader__text">Loading...</span>
                </div>
              ) : (
                <div id="type_01_main">
                  <div id="type_01_main__desc">
                    <div id='type_01_title'>
                      <div id="type_01_title__sub">SMART WATCH</div>
                      <div id="type_01_title__main">This will change your life forever!</div>
                      <div id="type_01_title__desc">A smartwatch is a portable device that's designed to be worn on a wrist. Like smartphones, they use touchscreens.</div>
                    </div>
                    <div className="type_01_checkbox">
                      <label className="type_01_checkbox_container">
                        <input type="checkbox" className="type_01_circle"></input>
                        A smartwatch is a portable
                        <span className="type_01_checkmark"></span>
                      </label>
                    </div>
                    <div className="type_01_checkbox">
                      <label className="type_01_checkbox_container">
                        <input type="checkbox" className="type_01_circle"></input>
                        A smartwatch is a portable
                        <span className="type_01_checkmark"></span>
                      </label>
                    </div>
                    <span id="type_01_dollar">$ 250</span>
                    <div id="type_01_desc__buttons">
                      <div className="type_01_buy">
                        <Link to="/type_01">
                          <div id="type_01_desc__buy__btn">
                            <span>Buy Now</span>
                          </div>
                        </Link>
                      </div>
                      <div className="type_01_watch">
                        <a href="https://www.youtube.com/c/joshstarmer" target="_blank" rel="noreferrer">
                          <div id="type_01_desc__watch__btn">
                            <div className="type_01_watchmark"></div>
                            <span>Watch Video</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="type_01_main__design">
                    <div id="type_01_background_01"></div>
                    <div id="type_01_background_02"></div>
                    <div id="type_01_background_03"></div>
                  </div>
                </div>
              )}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default type_01;