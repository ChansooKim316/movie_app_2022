import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 실제 html 태그는 아닌 리액트에서 사용하는 방식
// render함수 
// - 첫번째 인자 : 그릴것
// - 두번째 인자 : 그릴 위치
ReactDOM.render(
  // App.js 에 있는 App()
    <App />,
  document.getElementById('root')
);


