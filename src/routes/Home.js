import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Home.css";

class Home extends React.Component {
  state = {
    is_loading: true
  };
  componentDidMount() {
    this.setState({ is_loading: false })
  }
  render() {
    const { is_loading } = this.state;
    return (
      <section id="home_container">
        {is_loading ?
          (
            <div className="home_loader">
              <span className="home_loader__text">Loading...</span>
            </div>
          ) : (
            <div id="home_main">
              <div id="home_sidebar">
                <div id="home_sidebar__container">
                  <div className="home_sidebar__item">
                    <Link to="/type_01">type_01</Link>
                  </div>
                  <div className="home_sidebar__item">
                    <Link to="/type_02">type_02</Link>
                  </div>
                  <div className="home_sidebar__item">
                    <Link to="/type_03">type_03</Link>
                  </div>
                  <div className="home_sidebar__item">
                    <Link to="/type_04">type_04</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
      </section>
    );
  }
}

export default Home;