// 카테고리 선택 UI

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// categories라는 배열 안에 name과 text값이 들어가 있는 객체들을 넣어 주어서 한글로 된 카테코리와 실제 카테고리 값을 연결
const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category 
                    key={c.name} 
                    activeClassName="active"
                    // to 값이 "/"를 가리키고 있을 때는 exact를 true로 해줘야함. 안그러면 다른 카테고리 선택시, 전체보기 링크에서 active 스타일이 적용됨
                    exact={c.name === 'all'}
                    // to 값은 /카테고리이름 으로 설정. 대신 카테고리가 전체보기라면 "/"로 설정
                    to={c.name === 'all' ? '/' : `${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;


