import { createContext, useState } from 'react';

const ColorContext = createContext({
    color: 'black' }); // 새 context 만들기

export default ColorContext;