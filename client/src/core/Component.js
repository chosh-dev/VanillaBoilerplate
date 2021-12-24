export default class Component {
  constructor(target, props = {}) {
    this.$target = target;
    this.props = props;
    this.state = {};
    this.children = [];
    this.eventHandlers = [];
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}

  template() {
    return ``;
  }

  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getChild(selector) {
    return this.$target.querySelector(selector);
  }

  addComponent(Component, selector, props = {}) {
    const child = new Component(this.getChild(selector), props);
    this.children.push(child);
    return child;
  }

  setEvent() {}

  addEvent(eventType, selector, handler) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => children.includes(target) || target.closest(selector);
    const eventHandler = (e) => {
      if (!isTarget(e.target)) return false;
      handler(e);
    };

    this.eventHandlers.push([eventType, eventHandler]);
    this.$target.addEventListener(eventType, eventHandler);
  }

  unMounted() {}

  unMount() {
    this.eventHandlers.forEach(([eventType, handler]) =>
      this.$target.removeEventListener(eventType, handler)
    );

    this.children.forEach((child) => child.unMount());

    this.unMounted();
  }
}
