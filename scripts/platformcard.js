class PlatformCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create the wrapper element
    const wrapper = document.createElement("div");
    wrapper.classList.add("card");

    // Set the inner HTML for the card
    wrapper.innerHTML = `
            <div class="section">
                <h4>Platform</h4>
                <div class="platform">
                    <img src="./assets/facebook-img.png" alt="facebook logo" />
                    <span class"social-text">Facebook</span>
                </div>
                <div class="platform">
                    <img src="./assets/instagram.png" alt="facebook logo" />
                    <span class"social-text">Instagram</span>
                </div>
            </div>
            <div class="section">
                <h4>Performance</h4>
                <strong>
                <p class="social-text"> Reach: 203,000 </p>
                <p class="social-text">Evergreen Top 15% run-time</p>
                </strong> 
            </div>
            <div class="section">
                <h4>Tags</h4>
                <div class="tags">
                    <span class="tag ">Longer Tag</span>
                    <span class="tag ">Longer Tag</span>
                    <span class="tag ">Longer Tag</span>
                    <span class="tag ">Longer Tag</span>
                    <span class="tag ">Longer Tag</span>
                    <span class="tag ">Longer Tag</span>
                </div>
            </div>
        `;

    // Attach the CSS
    const style = document.createElement("style");
    style.textContent = `
            .card {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                border: solid 0.1px #7F7F7F;
                max-width: 350px;
                margin: auto;

            }

            .section {
                margin-bottom: 20px;
            }

            h4 {
                margin: 0;
                font-size: 16px;
                color: #888;
                margin-bottom: 10px;
            }

            .platform {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                font-size: 16px;
                color: #000;
            }

            .platform img {
                width: 20px;
                height: 20px;
                }

            .platform span{
            margin-left: 10px;
            }
            .social-text{
               fontsize: 11px;
               font:semi-bold;
            }
               .social-text span{
                margin-left: 10px;
               }

            .icon {
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right: 8px;
                background-size: contain;
                background-repeat: no-repeat;
            }

            .facebook-icon {
                background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg');
            }

            .instagram-icon {
                background-image: url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png');
            }

            p {
                margin: 5px 0;
                font-size: 16px;
                color: #000;
            }

            .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .tag {
                padding: 5px 10px;
                border: 1px solid #000;
                border-radius: 7.5px;
          
                font-size: 14px;
                  font:semi-bold;
                color: #000;
                background-color: #fff;
                cursor: pointer;
            }
                .section h4{
                font:semi-bold;
                }

                
        `;

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

// Define the new element
customElements.define("platform-card", PlatformCard);
