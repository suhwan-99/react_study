import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';

function App() {
  // state 만드는 방법
  // const[변수명, 변경함수] = useState(초기값);
  // usexxxx: use로 시작하는 것들은 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');
  const [boardtitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() =>{
        setTitle('상품목록');
      }}>제목 바꾸기</button>
      <div className='list'>
        <h4>{boardtitle[0]} 
          <button onClick={() => {
            setLike(like + 1)
            }}> 좋아요</button> {like} </h4>
        <p>2025-07-16</p>
      </div>
      <div className='list'>
        <h4>{boardtitle[1]}</h4>
        <p>2025-07-16</p>
      </div>
      <div className='list'>
        <h4 onClick={ ('click')}>{boardtitle[2]}</h4>
        <p>2025-07-16</p>
      </div>

      <button onClick={() => {
        // 배열에 들어있는 값을 바꾸기 위해선 배열값만 바꿔달라는게 아니라 배열값의 
        // 주소를 변경해야함 > boardtitle[]의 배열을 ...을 써서 배열을 부시고 []을 써서
        // 다시 배열로 만들고 그 배열에 0번방에 바꿀 배열값을 입력
        let boardtitle_ = [...boardtitle];
        boardtitle_[0] = '1번 게시물';
        setBoardTitle(boardtitle_);
        }}>첫번째 게시물 제목 바꾸기</button>

        <button onClick={() => {
        let boardtitle_ = [...boardtitle];
        boardtitle_[1] = '2번 게시물';
        setBoardTitle(boardtitle_);
        }}>두번째 게시물 제목 바꾸기</button>

        <button onClick={() => {
        let boardtitle_ = [...boardtitle];
        boardtitle_[2] = '3번 게시물';
        setBoardTitle(boardtitle_);
        }}>세번째 게시물 제목 바꾸기</button>

        { show ? <Detail /> : ''}
    </div>
  )
}


export default App
