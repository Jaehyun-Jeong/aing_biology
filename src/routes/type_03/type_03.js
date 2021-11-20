import React from "react";
import Navigation from './type_03_Navigation';
import Article from '../../components/article';
import "./type_03.css";
import { db_service } from "../../fbase";
import { collection, addDoc, getDocs } from "firebase/firestore";

class type_03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      content: "",
      articles: []
    };
  }
  fetch_contents = async () => {
    const querySnapshot = await getDocs(collection(db_service, "articles"));
    querySnapshot.forEach((doc) => {
      const article_obj = {
        ...doc.data(),
        id: doc.id
      };
      this.setState((prev) => ({ articles: [article_obj, ...prev.articles] }));
    });
    this.setState({ is_loading: false });
  }
  on_change = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ content: value });
  }
  on_submit = (e) => {
    e.preventDefault();
    const content = this.state.content;
    try {
      const doc_ref = addDoc(collection(db_service, "articles"), {
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
    this.fetch_contents();
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
                  <form onSubmit={this.on_submit}>
                    <input value={this.state.content} onChange={this.on_change} type="text" placeholder="input something" maxLength={120} />
                    <input type="submit" value="submit" />
                  </form>
                  <div id="type_03__articles">
                    {this.state.articles.map(article => (
                      <Article
                        id={article.id}
                        title={article.title}
                        content={article.content}
                      />
                    ))}
                  </div>
                </div>
                <div onClick={this.fetch_contents}>
                  <h1>contents</h1>
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