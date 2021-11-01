import React from 'react';
import { Link } from 'react-router-dom';
import './type_03_Navigation.css';

function Navigation() {
  return (
    <div id="type_03_panel">
      <nav class="type_03_panel__nav">
        <h3>
          <span>둘러보기</span>
        </h3>
        <div>
          <ul className="type_03_list_menu">
            <li>
              <Link>
                <span>대문</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>최근 바뀜</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>요즘 화제</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>임의의 문서로</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>기부</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="type_03_panel__nav">
        <h3>
          <span>사용자 모임</span>
        </h3>
        <div>
          <ul className="type_03_list_menu">
            <li>
              <Link>
                <span>사랑방</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>사용자 모임</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>관리 요청</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="type_03_panel__nav">
        <h3>
          <span>편집 안내</span>
        </h3>
        <div>
          <ul className="type_03_list_menu">
            <li>
              <Link>
                <span>도움말</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>정책과 지침</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>질문방</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;