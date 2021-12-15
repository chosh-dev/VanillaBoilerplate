# VanillaBoilerplate
Vanilla Javascript Boilerplate

## 주요기능

## 🧙‍♂️ client
### 라우터, 라우터 미들웨어

router의 routes 배열에 다음 형식으로 추가하면, 해당 url에 접속시 설정한 미들웨어를 실행한 뒤 컴포넌트를 렌더링한다.

ex)
```js
// client/src/core/router.js
  const routes = [
    { path: '/', view: Main },
    { path: '/profile', view: Profile },
    { path: '/middleware', view: Profile, middleware: [auth] },
  ];

```

### 리액트 컴포넌트를 모방한 컴포넌트 core

core의 Component를 확장해 컴포넌트를 만들 수 있다.
```js
import Component from '_core/Component';

class Example extends Component {}

```

### flux 패턴 상태관리 스토어

구독하기
```js
import { subscribe } from '_store';

subscribe("구독할 상태 string", "콜백함수(바뀐 값)");

// ex)
subscribe('subscribingValue', (newValue) => this.setState({ myValue: newValue }));
```


dispatch하기

(대응하는 type, action, reducer 필요)
```js
import { dispatch } from '_store';
import { changeValue } from '_actions';

dispatch(changeValue("newValue")));
```

### redux saga 모방한 미들웨어

type,과 action을 만든다.
```js
// client/src/store/actions

import * as type from '../types';

export const requestLogin = (payload) => ({ type: type.REQUEST_LOGIN, payload });
```

sagas에서 action에 대응한다.
```js
// client/src/store/sagas

const login = () => {
  // 비동기 로직
}

export default (action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      login(action);
      break;
  }
};
```

미들웨어 dispatch하기
```js
import { requestLogin } from '_actions';

dispatch(requestLogin())
```

### 웹팩
- babel (ie11 지원)
- eslint (standard 적용)
- scss 적용
- minify 적용
- 이미지 파일 처리
- resolve alias 적용

## 🧙‍♂️ server
### express 구조 세팅
![image](https://user-images.githubusercontent.com/73219421/146175256-dd4f8c70-9a95-4b1e-a79c-0cc988b443b2.png)

### winston, morgan logger
### 커스텀 에러 핸들링 

```js
const { CustomError } = require("../utils");

throw CustomError(400, "error message");
```

## 🧙‍♂️ infra
### 깃헙 액션 자동 배포

## 🧙‍♂️ 기타
### prettier
