import Component from '_core/Component';
import { subscribe, dispatch } from '_store';
import { requestLogin } from '_actions';

export default class Example extends Component {
  setup() {
    subscribe('count', (x) => this.setState({ msg: x }));

    this.state = {
      msg: 0,
    };
  }

  template() {
    return `
    <h1 class="example">컴포넌트 예시</h1>
    <h2 class="example">클릭시 숫자 더해질 것 ${this.state.msg}</h2>
    `;
  }

  setEvent() {
    this.addEvent('click', '.example', () => dispatch(requestLogin()));
  }
}
