import React from "react";
import axios from "axios";
import "./Home.css";

class Home extends React.Component {
  state = {
    is_loading: true
  };
  componentDidMount() {
    this.setState({is_loading: false})
  }
  render() {
    const { is_loading } = this.state;
    return (
      <section id="container">
        {is_loading ?
        (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div id="main">
            <div id="main__desc">
              <div id='title'>
                <div id="title__sub">SMART WATCH</div>
                <div id="title__main">This will change your life forever!</div>
                <div id="title__desc">A smartwatch is a portable device that's designed to be worn on a wrist. Like smartphones, they use touchscreens.</div>
              </div>
              <div className="checkbox">
                <label className="checkbox_container"> 
                  <input type="checkbox" className="circle"></input>
                  A smartwatch is a portable
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="checkbox">
                <label className="checkbox_container">
                  <input type="checkbox" className="circle"></input>
                  A smartwatch is a portable
                  <span className="checkmark"></span>
                </label>
              </div>
              <span id="dollar">$ 250</span>
            </div>
            <div id="main__design">
              <div id="background_01"></div>
              <div id="background_02"></div>
              <div id="background_03"></div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;