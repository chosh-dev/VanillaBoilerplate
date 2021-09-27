export default class Component {
  constructor(target, props = {}) {
    this.$target = target;
    this.props = props;
    this.state = {};
    this.setup();
    this.render();
    this.mounted();
    this.setEvent();
  }

  setup() {}

  template() {
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  mounted() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getChild(selector) {
    return this.$target.querySelector(selector);
  }

  setEvent() {}

  addEvent(eventType, selector, handler) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target => {
      return children.includes(target) || target.closest(selector);
    };

    this.$target.addEventListener(eventType, e => {
      if (!isTarget(e.target)) return false;
      handler(e);
    });
  }
}
