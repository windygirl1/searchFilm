import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Example from './App';
import Similar from './Similar';
import reportWebVitals from './reportWebVitals';
import {
  AdaptivityProvider,
  ConfigProvider,
} from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge'

bridge.send("VKWebAppInit")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider>
    <AdaptivityProvider>
    <Routes>
    <Route path='/' element={<Example/>} />
    <Route path='/serchsimilar' element={<Similar/>} />
    </Routes>
    </AdaptivityProvider>
    </ConfigProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
