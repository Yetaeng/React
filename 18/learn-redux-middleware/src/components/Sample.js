// 프레젠테이셔널 컴포넌트 작성
import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩 중...'}
                {/* 데이터를 불러와서 렌더링해 줄 대는 유효성 검사를 해 주는 것이 중요! */}
                {!loadingPost && post && (
                    <div>
                        {/* post는 title이랑 body만 보여주니까 */}
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr />
            <section>
                <h1>사용자 목록</h1>
                {loadingUsers && '로딩 중...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;