/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MyName {
    constructor() {
        this.start = 1;
        this.max = 100;
        this.min = 0;
        this.step = 1;
    }
    /*
    @Listen('message')
      messageHandler(event: CustomEvent) {
        console.log('Received the custom message event: ', event.detail);
      }
     */
    componentWillLoad() {
        this.value = this.start;
    }
    increment() {
        const newValue = this.value + this.step;
        this.value = newValue > this.max ? this.max : newValue;
        this.message.emit(this.value);
    }
    decrement() {
        const newValue = this.value - this.step;
        this.value = newValue < this.min ? this.min : newValue;
        this.message.emit(this.value);
    }
    render() {
        return (h("div", null,
            h("button", { type: "button", onClick: () => this.increment() }, "+"),
            h("span", null, this.value),
            h("button", { type: "button", onClick: () => this.decrement() }, "-")));
    }
    static get is() { return "my-counter"; }
    static get properties() { return { "max": { "type": Number, "attr": "max" }, "min": { "type": Number, "attr": "min" }, "start": { "type": Number, "attr": "start" }, "step": { "type": Number, "attr": "step" }, "value": { "state": true } }; }
    static get events() { return [{ "name": "message", "method": "message", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "my-counter button,\nmy-counter span {\n  font-size: 3rem;\n  font-family: monospace;\n  padding: 0 .5rem;\n}\n\nmy-counter button {\n  background: #80CBC4;\n  color: black;\n  border: 0;\n  border-radius: 6px;\n  box-shadow: 0 0 5px rgba(18, 173, 152, 0.5);\n}\n\nmy-counter button:active {\n  background: #004D40;\n  color: white;\n}"; }
}

export { MyName as MyCounter };
