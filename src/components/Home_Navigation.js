import './Home_Navigation.css';
import NavList from "./nav_list";
import { useState, useEffect } from "react";

function Navigation(props) {
  const [panel_opened, set_panel_opened] = useState(false);
  
  useEffect(() => {
    props.blur_function();
  }, [panel_opened]);

  return (
    <div id="Home_panel" className={`${panel_opened ? 'Home_panel_checked' : ''}`}>
      <div className='Home_panel__header'>
        <div
          className={`${panel_opened ? 'Home_panel__button_checked' : 'Home_panel__button'}`}
          onClick={() => { set_panel_opened(!panel_opened) }}
        >{`${panel_opened ? "X" : "☰"}`}</div>
        <a
          className="Home_panel__email"
          href="mailto:wogus0948@naver.com">
          <div id="Home_panel__email_image"></div>
        </a>
        <div className="Home_panel__about">
          <div id="Home_panel__about_image"></div>
        </div>
      </div>
      <nav id="Home_panel__nav" className={`${panel_opened ? 'Home_panel__nav_checked' : ''}`}>
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