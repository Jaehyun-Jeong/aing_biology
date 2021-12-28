import './type_03_Navigation.css';
import NavList from "../../components/nav_list";

function Navigation(props) {
  return (
    <div id="type_03_panel">
      <nav className="type_03_panel__nav">
        <h3>
          <span>둘러보기</span>
        </h3>
        <div>
          <ul className="type_03_list_menu">
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