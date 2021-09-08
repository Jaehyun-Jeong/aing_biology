import React from "react";
import { Link } from 'react-router-dom';
import "./type_02.css";

class type_02 extends React.Component {
  state = {
    is_loading: true
  };
  componentDidMount() {
    this.setState({ is_loading: false })
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
            <div id="main"></div>
          )}
      </section>
    );
  }
}

export default type_02;