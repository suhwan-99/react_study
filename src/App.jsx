import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import APP02 from './APP02';

function App() {
  // state 만드는 방법
  // const[변수명, 변경함수] = useState(초기값);
  // usexxxx: use로 시작하는 것들은 리액트 내장함수 ( 리액트 훅 )
  const [title, setTitle] = useState('게시판');
  const [boardtitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState([0,0,0]);
  const [show, setShow] = useState(false);
  // 몇번째 게시글을 클릭한지 저장
  const [index, setIndex] = useState(0);
  // 새로운 글작성 제목을 기억
  const [newTitle, setNewTitle] = useState('');
  return (
    <div className='App'>
        <APP02 />
      {/* {
      반복용 코드 ( .map ( () => {}  )  )
        arr.map( (data) => {
          return (
            <div> {data}
              <p>{data + 10}</p>
            </div>
          );
          
        })
      } */}
      <div className='nav'>
        <h3>{title}</h3>
      </div>
      <button onClick={() =>{
        setTitle('상품목록');
      }}>제목 바꾸기</button>
      {
      boardtitle.map( (title, i) => {
          return (
            <div className='list' key={i}>
            <h4 onClick={ () => {
              setShow(!show);
              setIndex(i);
            }}>{title}<button onClick={ (e) => {
              e.stopPropagation();
              like[i] =like[i] + 1;
              let like_ = [...like];
              setLike(like_);
            }}>좋아요 </button>{like[i]}</h4>
            <p>2025-07-16</p>

            <button onClick={() => {
              let boardtitle_= [...boardtitle];
              boardtitle_.splice(i,1);
              setBoardTitle(boardtitle_);
              let like_ = [...like];
              like_.splice(i,1);
              setLike(like_);
            }}>삭제</button>
            </div>
          )
        })
      }
      {/* <div className='list'>
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
        <h4>{boardtitle[2]}</h4>
        <p>2025-07-16</p>
      </div> */}

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
        
        {show ? <Detail boardtitle = {boardtitle} setBoardTitle = {setBoardTitle} index = {index} /> : ''}
        <input type="text" value={newTitle} onChange={(e) => {
          setNewTitle(e.target.value);
        }}/>
        <button onClick={ () => {
          if(newTitle === '') {
            alert('제목을 입력해야 합니다.');
            return;
          }
          let boardtitle_ = [...boardtitle];
          boardtitle_.push(newTitle);
          setBoardTitle(boardtitle_);
          let like_ = [...like];
          like_.push(0);
          setLike(like_);
          
          setNewTitle('');
        }}>글 작성</button>
    </div>
  )
}


export default App
