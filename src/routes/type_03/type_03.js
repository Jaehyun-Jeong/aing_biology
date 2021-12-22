import React from "react";
import Navigation from './type_03_Navigation';
import Article from '../../components/article';
import "./type_03.css";
import { db_service } from "../../fbase";
import { collection, query, where, select, getDocs} from "firebase/firestore";

class type_03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      content: "",
      articles: [],
      open_article: {"id": "", "title": "", "content": ""}
    };
  }
  fetch_articles = async () => {
    const query_snapshot = await getDocs(collection(db_service, "articles"));
    query_snapshot.forEach((doc) => {
      const article_obj = {
        ...doc.data(),
        id: doc.id
      };
      this.setState((prev) => ({ articles: [article_obj, ...prev.articles] }));
    });
    this.setState({ is_loading: false });
  }
  fetch_article = async (id) => {
    const query_state = query(collection(db_service, "articles"), where("id", "==", id));
    const query_snapshot = await getDocs(query_state);
    query_snapshot.forEach((doc) => {
      const article_obj = {
        ...doc.data(),
        id: doc.id
      };
      this.setState({ open_article: article_obj });
    });
  }
  componentDidMount() {
    this.fetch_articles();
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
                <Navigation articles={this.state.articles}/>
                <div id="type_03_main">
                  <div id="type_03__articles">
                    <Article
                      id={this.state.open_article.id}
                      title={this.state.open_article.title}
                      content={this.state.open_article.content}
                    />
                  </div>
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