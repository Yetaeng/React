// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링해 주는 컴포넌트

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

// 카테고리를 지정하여 API 요청하기 - 1. { category } props로 받기
const NewsList = ({ category }) => {
    // const [articles, setArticles] = useState(null);

    // usePromise를 사용하면 NewsList에서 대기 중 상태 관리와 useEffect 설정을 직접 하지 않아도 되므로 코드가 간결해진다.
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e596568d818f4c39961d3cf1780750bc`
        );
    }, [category]);

    // useEffect(() => {
    //     // async를 사용하는 함수 따로 선언
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             // 카테고리를 지정하여 API 요청하기 - 2. 현재 category 값이 무엇인지에 따라 요청할 주소 동적으로 바꾸기
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const response = await axios.get(
    //                 'http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e596568d818f4c39961d3cf1780750bc',
    //             );
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [category]); //category 값이 바뀔 때마다 뉴스를 새로 불러와야 하기 때문에 useEffect의 의존 배열에 category를 넣어줌

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }

    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    // response 값이 유효할 때
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {/* 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때, 꼭 map 함수를 사용하기전 articles를 조회해야한다.
            그래서 해당 값이 null인지 아닌지 검사해야 한다.
            만일 하지 않으면, 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류가 난다. -> 흰 페이지만 보이게됨 */}
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;