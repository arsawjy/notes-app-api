class MyFooter extends HTMLElement {
    _shadowRoot = null;
    _style = null;
  
    constructor() {
      super();
  
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._style = document.createElement("style");
    }
  
    _updateStyle() {
      this._style.textContent = `
        :host {
          display: block;
        }
  
        div {
          padding: 24px 20px;
          margin-bottom: 0;
          color: white;
          background-color: #222222;
        }
  
        h1{
          margin: 0;
          font-size: 25px;
          text-align: center;
        }

        p {
            font-size: 18px;
            text-align: center;
        }
  
        @media screen and (max-width: 768px) {
          div {
            width: 100%;
          }
        }
      `;
    }
  
    _emptyContent() {
      this._shadowRoot.innerHTML = "";
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._emptyContent();
      this._updateStyle();
  
      this._shadowRoot.appendChild(this._style);
      this._shadowRoot.innerHTML += `
      <div>
        <h1>Made by Arsa</h1>
        <p>With HTML, CSS, and JS.</p>
      </div>
      `;
    }
  }
  
  customElements.define("my-footer", MyFooter);