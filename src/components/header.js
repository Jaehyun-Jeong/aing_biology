import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";

function header() {
  return (
    <div id="header_frame">
      <div id="header">
        <Link to="/">
          <div id="header__logo"></div>
        </Link>
      </div>
    </div>
  )
}

header.propTypes = {
}

export default header;