import React from "react";
import Navigation from "../components/Home_Navigation";
import Article from "../components/article";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import "./Home.css";
import { db_service } from "../fbase";
import { collection,  getDocs } from "firebase/firestore";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: true,
      categories: [],
      open_article: {id: "", title: "", created_date: "", thumbnail: "", body: ""},
      is_blur: false
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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const article_obj = {
      id: index,
      title: category.articles[index].title_ko,
      created_date: category.articles[index].created_date.toDate().toLocaleDateString(undefined, options),
      thumbnail: category.articles[index].thumbnail,
      body: category.articles[index].body
    };
    this.setState(({ open_article: article_obj }));
  }
  toggle_blur_body = () => {
    this.setState((prev) => ({ is_blur: !prev.is_blur }));
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
                <div id="Home_header" className={`${this.state.is_blur ? "" : "blur"}`}>
                  <Header/>
                </div>
                <div id="Home_title"  className={`${this.state.is_blur ? "" : "blur"}`}>
                  <Title
                    thumbnail={this.state.open_article.thumbnail}
                    title={this.state.open_article.title}
                    created_date={this.state.open_article.created_date}
                  />
                </div>
                <div id="Home_main">
                  <div 
                    id="Home_main__article"
                    className={`${this.state.is_blur ? "" : "blur"}`}>
                    <Article
                      body={this.state.open_article.body}
                    />
                  </div>
                  <Navigation categories={this.state.categories} fetch_function={this.fetch_body} blur_function={this.toggle_blur_body}/>
                </div>
                <div id="Home_footer" className={`${this.state.is_blur ? "" : "blur"}`}>
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