import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from  './Profile';
import WithRouterSample from './WithRouterSample';

// NavLink -> 특정 스타일 혹은 CSS 클래스 적용 가능
const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return(
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    {/* NavLink는 Link와 비슷한데, 현재 경로와 Link에서 사용하는 경로가 일치할 때 특정 스타일을 적용할 수 있다. */}
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">velopert</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">gildong</NavLink>
                </li>
            </ul>
{/* 기존에는 App 컴포넌트에서 두 종류의 프로필 링크를 보여주었는데, 서브라우트를 이용해서 이를 자름! */}
{/* 프로필 링크를 보여주는 Profiles라는 라우트 컴포넌트를 따로 만들고, 그 안에 Profile 컴포넌트를 서브 라우트로 사용함 */}
            <Route
                path="/profiles"
                exact // exact={true} 와 같은 의미. 값을 생략하면 자동으로 true로 설정됨
                render={() => <div>사용자를 선택해 주세요.</div>} // 컴포넌트대신 render라는 props를 넣어 주어보여주고 싶은 JSX를 넣어줌
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample /> 
            {/* withRouter를 사용하면 현재 자신을 보여 주고 있는 라우트 컴포넌트를 기준으로 match가 전달된다. 라우트 설정 시 path="/profiles" 라고만 했으므로
            username 파라미터를 읽어 오지 못해 match객체의 params가 비어 있는 것이다.
            이를 해결하려면 WithRouterSample 컴포넌트를 Profiles에서 지우고 Profile에 넣는다. */}
        </div>
    );
};

export default Profiles;