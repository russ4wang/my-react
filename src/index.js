import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// PWA
// import registerServiceWorker from './registerServiceWorker' //http协议的服务器上，用于联网显示的页面在断网后依然会保存页面
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
