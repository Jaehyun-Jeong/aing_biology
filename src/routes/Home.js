import React from "react";
import { Link } from 'react-router-dom';
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
                  <Link to="/type_01">
                    <div className="home_sidebar__item home_sidebar__btn">
                      <span>TYPE 01</span>
                    </div>
                  </Link>
                  <Link to="/type_02">
                    <div className="home_sidebar__item home_sidebar__btn">
                      <span>TYPE 02</span>
                    </div>
                  </Link>
                  <Link to="/type_03">
                    <div className="home_sidebar__item home_sidebar__btn">
                      <span>TYPE 03</span>
                    </div>
                  </Link>
                  <Link to="/type_04">
                    <div className="home_sidebar__item home_sidebar__btn">
                      <span>TYPE 04</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
      </section>
    );
  }
}

export default Home;