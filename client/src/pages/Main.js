import Component from '_core/Component';
import Example from '_components/Example';
import logo from '_images/logo.svg';
import profilePng from '_images/profile.png';

export default class Main extends Component {
  #privateField = 'check babel work';

  setup() {
    this.state = {
      dataList: [1, 2, 3, 4, [5, 6, [7]]].flat(2).join(''),
    };
  }

  template() {
    return `
    <h1>hello world!</h1>
    <a href="/profile" data-link>click this to check router</a>
    <h2>webpack test result</h2>
    <label>this line should be red </label>
    <div>test 'flat' function = ${this.state.dataList}</div>
    <div>
      <span>svg below 8kb</span>
      <img src=${logo} alt="logo">
    </div>
    <div>
      <span>png over 8kb</span>
      <img src=${profilePng} alt="profile">
    </div>
    <div data-component="Example"></div>
    `;
  }

  mounted() {
    this.addComponent(Example, '[data-component="Example"]');
  }
}
