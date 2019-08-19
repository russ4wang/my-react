import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './TodoList';

// PWA
// import registerServiceWorker from './registerServiceWorker' //http协议的服务器上，用于联网显示的页面在断网后依然会保存页面
ReactDOM.render(//使用JSX语法必须引入react
  <TodoList />,//JXS中组件必须大写开头
  document.getElementById('root')
);
