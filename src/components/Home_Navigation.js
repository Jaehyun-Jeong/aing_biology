import './Home_Navigation.css';
import NavList from "./nav_list";
import { useState } from "react";

function Navigation(props) {
  const [panel_opened, set_panel_opened] = useState(false);

  return (
    <div id={`${panel_opened ? 'Home_panel_checked' : 'Home_panel'}`}>
      <nav id={`${panel_opened ? 'Home_panel__nav_checked' : 'Home_panel__nav'}`}>
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
      <div 
        className={"Home_panel__button"}
        onClick={() => { set_panel_opened(!panel_opened) }}
      >☰</div>
    </div>
  );
}

export default Navigation;