import './Home_Navigation.css';
import NavList from "./nav_list";

function Navigation(props) {
  return (
    <div id="Home_panel">
      <nav className="Home_panel__nav">
        <div>
          <ul className="Home_list__menu">
            {props.categories.map(category => (
              <details className="Home_list__category">
                <summary><span id="Home_list__arrow"/>{category.title_ko}</summary>
                {category.articles.map((article, article_index) => {
                  return(
                    <NavList
                      title={article.title_ko}
                      category={category}
                      index={article_index}
                      fetch_function={props.fetch_function}
                    />
                  )
                })}
              </details>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;