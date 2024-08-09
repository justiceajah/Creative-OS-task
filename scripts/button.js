class CustomButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.className = "back-button";

    const slot = document.createElement("slot");
    button.appendChild(slot);

    const style = document.createElement("style");
    style.textContent = `
            .back-button {
                 background-color: #fff;
                  padding: 13px 13px;
                  cursor: pointer;
                border-radius: 7.5px;
                border: 1px solid rgba(0, 0, 0);
                font-size: 14px;
                font-weight: 600;
            }
           
        `;

    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

customElements.define("custom-button", CustomButton);
