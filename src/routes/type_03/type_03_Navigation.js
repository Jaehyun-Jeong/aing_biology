import './type_03_Navigation.css';
import Nav_list from "../../components/nav_list";

function Navigation(props) {
  return (
    <div id="type_03_panel">
      <nav class="type_03_panel__nav">
        <h3>
          <span>둘러보기</span>
        </h3>
        <div>
          <ul className="type_03_list_menu">
            {props.articles.map(article => (
              <Nav_list
                id={article.id}
                title={article.title}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;