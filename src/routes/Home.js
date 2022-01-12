import React from "react";
import Navigation from './Home_Navigation';
import Article from '../components/article';
import "./Home.css";
import { db_service } from "../fbase";
import { collection, query,  getDocs} from "firebase/firestore";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      content: "",
      articles: [],
      open_article: {"id": "", "title": "", "content": ""}
    };
    this.fetch_body = this.fetch_body.bind(this);
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
  fetch_body = async (id) => {
    const query_state = query(collection(db_service, "articles/" + id + "/body"));
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
              <div id="Home">
                <Navigation articles={this.state.articles} fetch_function={this.fetch_body}/>
                <div id="Home_main">
                  <div id="Home__articles">
                    <Article
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

export default Home;