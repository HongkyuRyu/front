import React from 'react';
import './App.css';
import BoardItem from 'components/BoardListItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { latestBoardListMock } from 'mocks';

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
