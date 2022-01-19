import './Home_Navigation.css';
import NavList from "./nav_list";

function Navigation(props) {
  return (
    <div id="Home_panel">
      <nav className="Home_panel__nav">
        <div>
          <ul className="Home_list__menu">
            {props.articles.map(article => (
              <NavList
                id={article.id}
                title={article.title}
                fetch_function={props.fetch_function}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;