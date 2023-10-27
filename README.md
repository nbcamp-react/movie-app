# 내배캠 React 3기 자바스크립트 팀 과제

## 🚩 팀 소개

[Aeight](https://github.com/nbcamp-react/movie-app/wiki)

## 🚩 과제 개요

**23. 10. 24 - 23. 10. 30**

```
1. 개인과제에서 작성한 [내배캠 인기영화 콜렉션]을 발전시키는 팀 프로젝트
2. 팀원들의 프로젝트 N개 중 1개를 대표로 선택, 팀 프로젝트로 발전
```

## 🚩 요구 사항

### (1) 필수 요구 사항

- [x] TMDB 또는 영화진흥위원회 오픈 API 이용
- [x] 영화정보 상세 페이지
  - [x] 기존 영화정보 카드 리스트에서 특정 item을 선택할 시, 상세 페이지로 이동
  - [x] 상세 페이지에서 메인 페이지(홈)로 이동하는 UI
- [ ] 상세 페이지 영화 리뷰 작성
  - [x] 상세페이지에서 특정 영화에 대해 의견을 작성할 수 있는 UI
  - [ ] 작성자, 리뷰, 확인비밀번호를 입력하도록 구현
  - [ ] 작성한 정보는 브라우저의 localStorage에 적재
- [x] github PR(=Pull Request) 사용한 협업
- [ ] UX를 고려한 validation check
  - [x] 영화 검색
  - [ ] 댓글 작성
  - [ ] 추가 기능 구현 시
- [ ] 하기 기재된 Javascript 문법 요소를 이용하여 구현
  - [x] const와 let만을 이용한 변수 선언
  - [ ] 형 변환 : 타입별 2개 이상 사용
    - [ ] number → string
    - [x] string → number
    - [ ] boolean → string
  - [ ] 연산자 : 3개 이상 사용
  - [x] 화살표 함수 : 2개 이상 사용
  - [ ] 조건문
    - [x] if
    - [x] switch
    - [ ] 삼항연산자
    - [x] 조건문 중첩
  - [ ] 반복문
    - [x] for문
    - [ ] while
    - [x] 반복 제어
  - [ ] 객체
    - [x] 스프레드 연산자
    - [ ] 배열 메서드 (push, pop, shift, unshift, splice, slice) 2개 이상
    - [ ] 배열 메서드 (**forEach**, map, **filter**, reduce, find) 3개 이상
  - [ ] 자료구조 (Map, Set) 사용
  - [ ] null과 undefined를 활용한 없는 값에 대한 처리
  - [ ] callback 함수(setTimeout, setInterval) 활용
  - [x] DOM 제어
  - [x] module (import, export)

### (2) 선택요구사항

- [x] CSS
  - [x] flex, grid 사용하기
  - [x] 반응형 UI 구성하기
- [ ] 상세페이지 리뷰 수정 및 삭제 기능 구현
- [x] 조건에 맞는 카드 리스트 정렬 기능(이름순, 별점순 등 자유롭게)
- [ ] 위에서 설명하지 않은 기타 외부 API

## 🚩 역할 분담

| 강호수                | 권보라               | 손창성           | 이아름                       | 이재환                              |
| --------------------- | -------------------- | ---------------- | ---------------------------- | ----------------------------------- |
| 상세 페이지 영화 리뷰 | 영화정보 상세 페이지 | 카드 리스트 정렬 | UX를 고려한 validation check | 영화정보 상세 페이지 & 영화 리뷰 UI |

## 🚩 개발 프로세스

1. Issue 생성
   1. Issue 템플릿 사용
   2. Assignees, Labels, Projects 지정
2. Issue 제목에 명시한 [브랜치명](https://github.com/nbcamp-react/movie-app/wiki/%EA%B9%83-%EC%A0%84%EB%9E%B5#%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%84%A4%EC%9D%B4%EB%B0%8D)으로 develop에서 분기하여 브랜치 생성 `git checkout -b feature/review`
   1. 로컬의 develop 브랜치는 항상 최신화 `git pull origin develop`
3. 작업 브랜치에서 소스코드 수정
4. 작업 브랜치에서 변경사항을 커밋
   1. [커밋 메시지 컨벤션](https://github.com/nbcamp-react/movie-app/wiki/%EA%B9%83-%EC%A0%84%EB%9E%B5#%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80)에 따라 작성
   2. 작업 브랜치 최신화
      1. 변경 사항이 없는 경우: `git pull origin develop`
      2. 변경 사항이 있는 경우
         1. `git add, commit`
         2. `git stash` (아직 완료하지 않은 일을 커밋하기 껄끄러울 때 사용)
         3. a와 b 중 선택. 이후에 `git pull origin develop`
5. 작업 브랜치를 origin에 push `git push origin feature/review`
6. develop 브랜치에 PR
   1. PR 템플릿 사용
   2. Reviewer, Assignees, Labels 지정
7. reviewer들의 리뷰가 승인되면 본인이 merge (merge한 브랜치는 삭제)
8. 최종 테스트 후 main 브랜치에 merge
   1. main 브랜치에서 버그가 발생한다면 hotfix 브랜치 생성
   2. 버그 수정이 끝나면 develop과 main 브랜치에 각각 merge

> [Git - Book](https://git-scm.com/book/ko/v2)
> .
