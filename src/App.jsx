import React, { useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardListItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { latestBoardListMock } from 'mocks';

import SockJS from "sockjs-client/dist/sockjs"
import { over } from "stompjs";



const [stompClient, setStompClient] = useState();


const connect = () => {

  const sock = new SockJS("http://localhost:4000/ws")
  const temp = over(sock);
  setStompClient(temp);

  const headers = {
    Authorization: `Bearer ${token}`,
    "X-XSRF-TOKEN": getCookie("XSRF-TOKEN")
  }



}



function App() {
  return (
    <Router>
      <Routes>
        {latestBoardListMock.map((boardListItem, index) => (
          <Route key={index} path={`/board/${index}`} element={<BoardItem boardListItem={boardListItem} />} />
        ))}

        <Route path="/" element={<div className='text-3xl font-bold underline'>홈 페이지입니다.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
