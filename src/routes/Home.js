import React from "react";
import Navigation from "../components/Home_Navigation";
import Article from "../components/article";
import Header from "../components/header";
import Footer from "../components/footer";
import "./Home.css";
import { db_service } from "../fbase";
import { collection,  getDocs} from "firebase/firestore";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      categories: [],
      open_article: {id: "", title: "", body: ""}
    };
    this.fetch_body = this.fetch_body.bind(this);
  }
  fetch_articles = async () => {
    const query_snapshot = await getDocs(collection(db_service, "category"));
    query_snapshot.forEach((doc) => {
      const category_obj = {
        ...doc.data(),
        "id": doc.id
      };
      this.setState((prev) => ({ categories: [category_obj, ...prev.categories] }));
    });
    this.setState({ is_loading: false });
  }
  fetch_body = async (category, index) => {
    const article_obj = {
      id: index,
      title: category.articles[index].title_ko,
      body: category.articles[index].body
    };
    this.setState(({ open_article: article_obj }));
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
                <div id="Home_header">
                  <Header/>
                </div>
                <div id="Home_main">
                  <Navigation categories={this.state.categories} fetch_function={this.fetch_body}/>
                  <div id="Home_main__articles">
                    <Article
                      title={this.state.open_article.title}
                      body={this.state.open_article.body}
                    />
                  </div>
                </div>
                <div id="Home_footer">
                  <Footer/>
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