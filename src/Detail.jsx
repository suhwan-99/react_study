function Detail({boardtitle, setBoardTitle, index}) {
  return (
   <div className='detail'>
    <button onClick={ () => {
      let boardtitle_ = [...boardtitle];
      boardtitle_[0] = '바뀐 제목';
      setBoardTitle(boardtitle_)
    }}>제목 바꿔주는 버튼</button>
      <h4>{boardtitle[index]}</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

export default Detail;

// 상세페이지(detail)를 컴포넌트(jsx파일)로 만들어서 내보내기