import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './type_03_Navigation.css';
import { db_service } from "../../fbase";
import { collection, getDocs } from "firebase/firestore";

function Titles({ id, title }) {
  return (
    <li>
      <Link to={"/type_03/" + id}>
        <span >title</span>
      </Link>
    </li>
  );
}

function Navigation() {
  const [data, set_data] = useState(Array());

  const get_data = async () => {
    const query_snap_shot = await getDocs(collection(db_service, "linear_algebra"));
    /*query_snap_shot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      set_data([...set_data, {
        title: doc.data().title,
        ids: doc.data().dis
      }]);
    });*/
    set_data(query_snap_shot);
  };

  useEffect(() => {
    get_data();
  });

  /**/

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