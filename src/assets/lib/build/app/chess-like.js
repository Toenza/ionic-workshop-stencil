/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MyName {
    componentWillLoad() {
        this.like = false;
    }
    toggleLike() {
        this.like = !this.like;
    }
    render() {
        return (h("div", null,
            h("button", { type: "button", onClick: () => this.toggleLike() },
                h("span", null, this.like ? this.textPos : this.textNeg))));
    }
    static get is() { return "chess-like"; }
    static get properties() { return { "like": { "state": true }, "textNeg": { "type": String, "attr": "text-neg" }, "textPos": { "type": String, "attr": "text-pos" } }; }
    static get style() { return "chess-like button,\nchess-like span {\n  font-size: 3rem;\n  font-family: monospace;\n  padding: 0 .5rem;\n}\n\nchess-like button {\n  background: #80CBC4;\n  color: black;\n  border: 0;\n  border-radius: 6px;\n  box-shadow: 0 0 5px rgba(18, 173, 152, 0.5);\n}\n\nchess-like button:active {\n  background: #004D40;\n  color: white;\n}"; }
}

export { MyName as ChessLike };
