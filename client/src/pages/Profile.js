import Component from "_core/Component"

export default class Profile extends Component {
  #privateField = "check babel work";

  setup() {
    this.state = {
      dataList: [1, 2, 3, 4, [5, 6, [7]]].flat(2).join(""),
    };
  }

  template() {
    return `
    <h1>Profile page</h1>
    `;
  }
}
