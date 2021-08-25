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
      <section className="container">
        {is_loading ?
        (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            
          </div>
        )}
      </section>
    );
  }
}

export default Home;