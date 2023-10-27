const commentBtn = document.querySelector('.submit'); // 등록 버튼
const commentList = document.querySelector('.comment-list'); // 댓글 리스트
const total = document.querySelector('.count'); //댓글 수
const commentInput = document.querySelector('.comment-input'); //댓글 입력
const nickInput = document.querySelector('.user-nick input'); // 닉네임 입력
const pwInput = document.querySelector('.user-pw input'); //비번 입력
let comments = []; //댓글 초기화

//이벤트를 등록 (생활코딩https://youtu.be/ncv3UwUarUc?si=ALWe4NOe3-QzVRc4)
//댓글 데이터를 불러오고 데이터를 배열 형태로 변환하고 화면에 표시
//window.addEventListener('load', () => {...}) : 나도 왜쓰는지는 모르겠지만 안정성이 올라간다고 함
window.addEventListener('load', () => {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
    comments = JSON.parse(storedComments);
    updateComments();
  }
});
//댓글 입력 폼 함수
function commentBtnHandler(e) {
  e.preventDefault();

  const commentText = commentInput.value; //내용
  const nickName = nickInput.value; //닉네임
  const password = pwInput.value; //비번 type을 password로 변경하여 비번 느낌스
  //!부정연산자 비어있음 =비어있음=비어있음
  if (!commentText || !nickName || !password) {
    alert('댓글 내용, 닉네임, 비밀번호를 모두 입력해 주세요!!.');
    return;
  }
  //userid: Unknown word 자꾸 뜨는데 포기.....가 아닌 과제 제출 전까지 찾아보겠음
  //댓글 생성
  const newComment = {
    userid: nickName,
    content: commentText,
    date: new Date().toLocaleString(),
  };
  //댓글 추가
  comments.push(newComment);
  //로컬 스토리지에 댓글 저장
  //문자열로 변환하여 저장
  localStorage.setItem('comments', JSON.stringify(comments));

  updateComments();

  commentInput.value = '';
  nickInput.value = '';
  pwInput.value = '';
}
// 댓글 표시 업데이트 함수
function updateComments() {
  commentList.innerHTML = '';
  // 댓글 최신순으로 !!!!!!!
  comments.reverse();

  for (const comment of comments) {
    const row = createRow(comment.userid, comment.content, comment.date);
    commentList.appendChild(row);
  }
  //댓글의 갯수를 업데이트
  total.innerText = comments.length;
}
// 이거는 진짜 모르겠음 컨닝.....
function createRow(nickInput, content, date) {
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  ul.className = 'comment-row';
  li1.className = 'comment-id';
  li2.className = 'comment-content';
  li3.className = 'comment-date';

  li1.innerHTML = nickInput;
  li2.innerHTML = content;
  li3.innerHTML = date;

  return ul;
}
//새로운 댓글을 추가 등록 누를 때 마다
commentBtn.addEventListener('click', commentBtnHandler);

updateComments();
