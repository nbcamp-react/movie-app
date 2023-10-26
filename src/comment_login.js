// // const commentBtn = document.querySelector("#commentFrm");
// // const list = [];

// // // function commentBtnHandler(e) {
// // //     e.preventDefault();
// // //       console.dir(e.target);
// // //       console.log(e.target[0]);
// // //       console.log(e.target[0].value);
// // //       console.log(e.target[0].element[0]);
// // //       console.log(e.target[0].element[0].value);
// // //       console.log(e.target[0].element.content);
// // //       console.log(e.target[0].element.content.value);
// // //       console.log(e.target.content);
// // //       console.log(e.target.content.value);

// // // function commentBtnHandler(e) {
// // //   e.preventDefault();
// // //   list.push(e.target.content.value);
// // //   return console.log(list);
// // // }

// // function commentBtnHandler(e) {
// //   e.preventDefault();
// //   const input = e.target.content;
// //   if (input.value === "") {
// //     alert("한글자 이상 입력해주세요");
// //     return;
// //   }
// //   list.push(input.value);
// // }

// // commentBtn.addEventListener("submit", commentBtnHandler);
// const commentBtn = document.querySelector("#commentFrm");
// const list = [];

// function Comment(content) {
//     this.userid = "cloudcoke";
//     this.content = content;
//     this.date=Temporal.Now.timeZone()
// }

// function commentBtnHandler(e) {
//   e.preventDefault();
//   const input = e.target.content;
//   if (input.value === "") {
//     alert("한글자 이상 입력해주세요");
//     return;
//   }
//   const commentObj = new Comment(input.value);
//   list.push(input.value);
//   e.target.reset();
// }

// const commentList = document.querySelector("#comment-list");
// )

// commentBtn.addEventListener("submit", commentBtnHandler);

const commentBtn = document.querySelector('#commentFrm');
const commentList = document.querySelector('#comment-list');
const total = document.querySelector('h4 > span');
const list = [];

function Comment(content) {
  this.userid = '방문자';
  this.content = content;
  this.date = new Date();
}

function createRow(userid, content, date) {
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);

  ul.setAttribute('class', 'comment-row');
  li1.setAttribute('class', 'comment-id');
  li2.setAttribute('class', 'comment-content');
  li3.setAttribute('class', 'comment-date');

  li1.innerHTML = userid;
  li2.innerHTML = content;
  li3.innerHTML = date;

  return ul;
}

function drawing() {
  commentList.innerHTML = '';
  for (let i = list.length - 1; i >= 0; i--) {
    const row = createRow(list[i].userid, list[i].content, list[i].date);
    commentList.append(row);
  }
}

function totalRecord() {
  total.innerHTML = `(${list.length})`;
}

function commentBtnHandler(e) {
  e.preventDefault();
  const input = e.target.content;
  if (input.value === '') {
    alert('내용을 넣고 등록 버튼을 눌러주세요.');
    return;
  }
  const commentObj = new Comment(input.value);
  list.push(commentObj);
  totalRecord();

  drawing();
  e.target.reset();
}

totalRecord();
commentBtn.addEventListener('submit', commentBtnHandler);
