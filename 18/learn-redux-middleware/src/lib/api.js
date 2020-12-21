// 모든 API 함수화하기
import axios from 'axios';

export const getPost = id =>
    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id =>
    axios.get(`http://jsonplaceholder.typicode.com/users`);