# Cool Peace Client

## 요청 사항

- dev 브랜치를 평가받고 싶습니다.

## 현재 진행 상황

- 프로젝트 초기 세팅을 완료하였습니다. [쿨피스 초기 세팅 문서](https://sugar-gasoline-6bc.notion.site/5c6f48673f124145b3322f60663d322e?pvs=4)
- 사이드바 및 헤더 등 기본적인 레이아웃이 배포되었습니다.
- 현재 각 페이지별로 레이아웃 작업을 진행중에 있습니다.

## 1차 야놀자 멘토링 질문

1. 현재 쿨피스 프로젝트는프로젝트 초기 세팅 및 파일 구조가 잘 적용 되어있는지, 부족한 점은 없는지 궁금합니다.
2. [쿨피스 컨벤션](https://sugar-gasoline-6bc.notion.site/FE-adb78e85671b4d80988cd08cb88a93cf?pvs=4)에서 오류가 있거나, 보완한 부분은 없는지 궁금합니다.
3. [리액트 쿼리를 활용한 에러 바운더리, 서스펜스 실습](https://github.com/JitHoon/react-error-loading)에서 잘못 사용된 부분은 없는지, 더 잘 활용하기 위한 추천 사항은 없는지 궁금합니다.
4. closed된 PR 에서 코드 리뷰가 잘 진행되고 있는지, PR의 규모는 적절한지 궁금합니다. 또한 추천하시는 코드 리뷰 방식이나 PR 규모가 궁금합니다.

## Contributor

- @로그인/회원가입 (김다빈)
- @대시보드 (김특희, 최지훈)
- @쿠폰조회 (정진주)
- @쿠폰등록 (한은지)
- @정산관리 (정지오)

## Tech Stack

- 어플리케이션 보일러플레이트 생성 : Vite (react-swc-ts)
- 스타일 : emotion, reset css
- 코드 컨벤션 : Eslint, prettier
- 배포, CI/CD : Vercel (+ Github Actions)
- 테스트 : Jest
- 비동기 처리, 상태 관리, 에러 컨트롤 : Axios, Reac-Query, Recoil,react-error-boundary

## Script

앱 실행

```
$ npm run dev
```
