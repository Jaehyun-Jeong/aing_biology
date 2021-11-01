import React, { useState } from "react";
import Navigation from './type_03_Navigation';
import "./type_03.css";
import { db_service } from "../../fbase";
import { collection, addDoc } from "firebase/firestore";

class type_03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      content: ""
    };
  }
  onChange = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ content: value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const content = this.state.content;

    try {
      const doc_ref = addDoc(collection(db_service, "linear_algebra"), {
        content: content,
        create_at: Date.now()
      });
      console.log("Document written with ID: ", doc_ref.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    this.setState({ content: "" });
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
            < React.Fragment >
              <div id="type_03">
                <Navigation />
                <div id="type_03_main">
                  <form onSubmit={this.onSubmit}>
                    <input value={this.state.content} onChange={this.onChange} type="text" placeholder="input something" maxLength={120} />
                    <input type="submit" value="submit" />
                  </form>
                </div>
              </div>
            </React.Fragment>
          )
        }
      </section>
    );
  }
}

export default type_03;