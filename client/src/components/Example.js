import Component from '_core/Component';
import { subscribe, unSubscribe, dispatch, getState } from '_store';
import { countUp, requestLogin } from '_actions';

export default class Example extends Component {
  setup() {
    this.state = {
      count: getState('count'),
      loginSuccess: false,
    };

    this.setCount = (value) => this.setState({ count: value });
    this.setLoginSuccess = (_, value) => this.setState({ loginSuccess: value });

    subscribe('count', this.setCount);
    subscribe('loginSuccess', this.setLoginSuccess);
  }

  template() {
    return `
    <h1 class="example">컴포넌트 예시</h1>
    <h2 class="plusText">클릭시 숫자 더하기 DISPATCH ${this.state.count}</h2>
    <h2 class="loginText">클릭시 비동기 SAGA DISPATCH, 성공여부=${
      this.state.loginSuccess ? '성공' : '실패'
    }</h2>
    `;
  }

  setEvent() {
    this.addEvent('click', '.plusText', () => dispatch(countUp()));
    this.addEvent('click', '.loginText', () => dispatch(requestLogin({ id: 'request ID' })));
  }

  unMounted() {
    unSubscribe('count', this.setCount);
    unSubscribe('loginSuccess', this.setLoginSuccess);
  }
}
