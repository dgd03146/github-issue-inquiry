# 원티드 프리온보딩 1-2 4팀

## 배포 링크

<a href="https://starlit-snickerdoodle-9d0b9e.netlify.app" target="_blank">어플리케이션 바로가기</a>

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 임거정(팀장) | https://github.com/dgd03146    |
|              |                                |
| 고현수       | https://github.com/movie42     |
| 김하영       | https://github.com/Fibo4487    |
| 박라영       | https://github.com/rieulp      |
| 박호준       | https://github.com/ganeodolu   |
| 이슬         | https://github.com/seul-dev    |
| 조윤정       | https://github.com/yunjjeongjo |
| 최지영       | https://github.com/ohtmm       |

# 환경 설정 및 실행 방법

## 환경설정

1. NodeJS 16.14.2에서 실행하는 것을 권장합니다.
2. .env 파일을 root 디렉토리에 만들고 다음과 같이 값을 넣으세요.

```.env
REACT_APP_GITHUB_TOKEN=<your-key>
```

## 설치
```bash
npm ci
```

## 실행

```bash
npm start
```

# 디렉토리 구조

```
📦src
 ┣ 📂Components
 ┣ 📂Pages
 ┃ ┣ 📂Detail
 ┃ ┣ 📂Home
 ┃ ┣ 📂NotFound
 ┣ 📂Routes
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┣ 📂hooks
 ┃ ┣ 📂store
 ┃ ┗ 📂styles
```

# 동료학습

## Projects

저희는 동료 학습을 프로젝트 진행시 사용된 기술의 이해를 목적으로 진행하고 있습니다.

1. 개인 프로젝트 구현 후 만남
2. 과제 제출을 위한 토의
3. 모르는 부분 교환 공부
4. 다함께 파트 나누어서 Best 코드를 기반으로 Refactoring 진행
5. 이해 안되는 부분 공부

# best practice 선정 이유

## 1. [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 사용하여 무한 스크롤 구현하기

- scroll animation에 비해서 코드를 이해하는 것이 더 편리하다고 생각되어 사용하게 되었습니다.
- Intersection Observer는 뷰포트 상에 관찰하겠다고 결정한 컴포넌트(또는 HTML 태그)가 노출 되면 관찰 중인 entry.isIntersecting 값을 사용하여 Data Fetching을 제어할 수 있습니다.

해당 API를 사용하여 [useIntersection](../wanted-assignment2/src/lib/hooks/useIntersection.ts)라는 훅을 만들어 외부에서 관리하는 서버 상태값을 사용하여 Data Fetching을 제어하고 있습니다.

## 2. Context API

- 전역 상태를 관리하는 경우 router 내부가 아닌 외부에 Provider를 배치하여 관리의 용이성을 높였습니다.
- custom hook을 통해서 Context에서 관리하고 있는 상태를 컴포넌트에서 더욱 편하게 이용할 수 있습니다.

## 3. HTTP API

- context와 API 로직을 분리하고, API는 GithubRequestService 클래스를 만들어 관심사를 분리하여 사용하였습니다.
- issue를 Map 타입으로 적용하여 숫자 키를 사용할 수 있었고, 기존 키와 비교하면서 처음 불러오는 issue만 Github REST API에서 불러오며, 이미 불러왔던 issue는 재사용하도록 하였습니다.

## 4. 에러와 로딩 처리

- 에러의 경우, NotFound 페이지뿐만 아니라 다른 에러가 발생할 경우 별도 페이지를 제공하였습니다.
- 로딩의 경우, 데이터를 처음 불러올 때, 스크롤에 따라 데이터를 추가적으로 불러올 때 로딩 스피너를 보여줌으로써 사용자 편의성을 제공하였습니다.

## 5. 지정된 조건에 맞게 데이터 요청 및 표시

- github rest api의 공식문서에서 추천하는 utilkit 인 octokit 패키지를 사용하여 config에 sort: "comments", state: "open" 값을 주도록 하여 공식문서가 안내하는 방법으로 데이터를 정렬하였습니다.
- 이 외에 자바스크립트의 filter함수나 map함수로 정렬하는 방식은 결국 클라이언트의 리소스를 사용하는 것이기에 octokit의 옵션을 주어 데이터를 요청하는 방식을 채택하였습니다.

## 6. 반응형 웹 구현

- 미디어 쿼리를 이용해서 디바이스 크기에 따라 레이아웃이 변하도록 구현했습니다.
- styled-componenst의 theme provider에 device 사이즈의 값을 저장했습니다.

## 7. 공통 헤더

- children을 받아 전체 viewport를 감싸는 layout에 헤더를 배치하는 방식보다는, react-router-dom의 outlet 기능으로 헤더 이외 레이아웃 path에 해당하는 컴포넌트를 띄워주어 헤더 컴포넌트가 리렌더링이 되지 않도록 했습니다.

# 사용 라이브러리

### production

- @octokit/rest
  - github Rest API Document에서 제안하고 있어 HTTP Client로 사용하게 되었습니다.
- styled-components
  - 팀 원 모두가 JS-Style로 사용하기로 하여 라이브러리 통일을 위해 사용하였습니다.
- react-icons
  - svg icon을 사용하기 위해 설치하여 사용하였습니다.
- react-markdown
  - Markdown을 HTML 태그로 전환하기 위해 사용했습니다.
- react-syntax-highlighter
  - markdown으로 작성된 코드 블록을 HTML로 전환해 CSS 스타일을 입혀 사용자가 code block을 보기 편하게 하기 위해 사용하였습니다.
- rehype-raw
- remark-gfm
- react-router-dom
  - 리액트 상에서 SPA간에 페이지 이동을 보다 편리하게 설계하기 위해서 사용하였습니다.

### dev

- eslint
- prettier
- husky
