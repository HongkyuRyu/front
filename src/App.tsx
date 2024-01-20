import React, { Children } from 'react';
import './App.css';
import Main from 'views/Main';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import User from 'views/User';
import ChatRoom from 'views/Chat';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Navbar from 'layouts/Header/Navbar';
import Modal from 'layouts/modals/Modal';
import {
  MAIN_PATH, AUTH_PATH, SEARCH_PATH,
  USER_PATH, CHAT_PATH, BOARD_PATH, BOARD_DETAIL_PATH
  , BOARD_UPDATE_PATH, BOARD_WRITE_PATH
} from 'constant';

import ClientOnly from 'layouts/navbar/ClientOnly';
import RegisterModal from 'layouts/modals/RegisterModal';



// component: Application 컴포넌트 //


export const metadata = {
  title: "당근마켓",
  description: '당근마켓',
}




function App() {

  // render: Application 컴포넌트 렌더링 //
  // description: 메인 화면: '/' - Main //
  // description: 로그인 + 회원가입 화면: '/auth' - Auth //
  // description: 검색 화면 : '/search/:word' - Search //
  // description: 유저 페이지: '/user/:email' - User //
  // description: 게시물 상세보기: '/board/detail/:boardNumber' - BoardDetail //
  // description: 게시물 작성하기: '/board/write' - BoardWrite //
  // description: 게시물 수정하기: '/board/update/:boardNumber' - BoardUpdate //
  // description: 채팅 화면: '/chat/BoardNumber/chatNumber/' - ChatRoom //


  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} >
          <Route path={MAIN_PATH()} element={<Main />} />
          <Route path={AUTH_PATH()} element={<Authentication />} />
          <Route path={SEARCH_PATH(':searchWord')} element={<Search />} />
          <Route path={USER_PATH(':userEmail')} element={<User />} />
          <Route path={CHAT_PATH(':boardNumber', ':chatRoomBumber')} element={<ChatRoom />} />
          <Route path={BOARD_PATH()}>
            <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail />} />
            <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
            <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />} />
          </Route>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>

      </Routes>
    </Router >
  );
}
// <Router>
//   <Routes>
//     {/*게시판*/}
//     {latestBoardListMock.map((boardListItem, index) => (
//       <Route key={index} path={`/board/${index}`} element={<BoardItem boardListItem={boardListItem} />} />
//     ))}
//     {/*Top3게시물*/}
//     {top3BoardListMock.map((top3ListItem, index) => (
//       <Route key={index} path={`/top3/${index}`} element={<Top3Item top3ListItem={top3ListItem} />} />
//     ))}

//     {/*Comment 게시물 */}
//     {commentListMock.map((commentListItem, index) => (
//       <Route key={index} path={`/comment/${index}`} element={<CommentItem commentListItem={commentListItem} />} />
//     ))}
//     {/*Favorite 게시물 */}
//     {favoriteListMock.map((favoriteListItem, index) => (
//       <Route key={index} path={`/favorite/${index}`} element={<FavoriteItem favortieListItem={favoriteListItem} />} />
//     ))}


//     <Route path="/" />
//   </Routes>
// </Router>





export default App;
