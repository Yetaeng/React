import React from 'react';
import ReactDOMServer from 'react-router-dom';

const html = ReactDOMServer.renderToString(
    // renderToString 함수에 JSX를 넣어서 호출하면 렌더링 결과를 문자열로 반환함
    <div>Hello Server Side Rendering!</div>
);

export default html;