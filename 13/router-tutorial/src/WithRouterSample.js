import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                row={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)} // JSON에 들여쓰기가 적용된 상태로 문자열이 만들어짐
                row={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    )
}

// withRouter를 사용할 때는 컴포넌트를 내보내 줄 때 함수로 감싸준다.
export default withRouter(WithRouterSample)