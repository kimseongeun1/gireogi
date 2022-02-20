import './App.css';

function App() {
  return (
    <div className="App">
      <div className='one'>
        <div className='back'>←</div>
        <div className='maintitle'><strong>공모전 게시글 제목</strong></div>
      </div>

      <div className='two'>
        <div className='left'>
          <div className='picture'></div>
          <div className='go'>팀원 모집하러 가기</div>
        </div>
        <div className='right'>
          <div className='title'>
            <div className='title2'><strong>공모전 게시글 제목</strong></div>
            <div className='time'><strong>♕접수기간 : 2022/01/01 ~ 2022/02/01</strong></div>
          </div>
          <div className='contents'>
            <ul>
              <li>기업 형태 : 중소기업/스타트업</li>
              <li>참여 대상 : 대상 제한 없음</li>
              <li>시상 규모 : 100만원</li>
              <li>활동 혜택 : 실제 상용화</li>
              <li>홈페이지 : -</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='three'>저 오늘 첵스초코 우유에 말아먹었어요 저 영어 문장 분명 나오게 하는 방법이 있었던 것 같은데 뭐더라 기억이 안 난다</div>
    </div>
  );
}

export default App;
