class LeftSidebar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Creates a container for the sidebar
    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    // Sidebar content
    sidebar.innerHTML = `
            <div class="menu-section">
                <div class="menu-item"><span class="icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.18 17.36C13.6977 17.36 17.36 13.6977 17.36 9.18C17.36 4.66231 13.6977 1 9.18 1C4.66231 1 1 4.66231 1 9.18C1 13.6977 4.66231 17.36 9.18 17.36Z" stroke="url(#paint0_linear_6001_660)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.6483 5.71169L10.9142 10.9142L5.71169 12.6483L7.44585 7.44585L12.6483 5.71169Z" stroke="url(#paint1_linear_6001_660)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_6001_660" x1="9.18" y1="1" x2="9.18" y2="17.36" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A259FF"/>
                    <stop offset="1" stop-color="#613599"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_6001_660" x1="9.18001" y1="5.71169" x2="9.18001" y2="12.6483" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A259FF"/>
                    <stop offset="1" stop-color="#613599"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </span> Inspiration
                
                </div>
                <div class="menu-item"><span class="icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5422 1H2.81778C1.81385 1 1 1.81385 1 2.81778V15.5422C1 16.5462 1.81385 17.36 2.81778 17.36H15.5422C16.5462 17.36 17.36 16.5462 17.36 15.5422V2.81778C17.36 1.81385 16.5462 1 15.5422 1Z" stroke="url(#paint0_linear_6001_670)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.36216 4.63556H4.6355V12.8156H7.36216V4.63556Z" stroke="url(#paint1_linear_6001_670)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.7245 4.63556H10.9978V9.18H13.7245V4.63556Z" stroke="url(#paint2_linear_6001_670)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_6001_670" x1="9.18" y1="1" x2="9.18" y2="17.36" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A259FF"/>
                        <stop offset="1" stop-color="#613599"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_6001_670" x1="5.99883" y1="4.63556" x2="5.99883" y2="12.8156" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A259FF"/>
                        <stop offset="1" stop-color="#613599"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_6001_670" x1="12.3611" y1="4.63556" x2="12.3611" y2="9.18" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A259FF"/>
                        <stop offset="1" stop-color="#613599"/>
                        </linearGradient>
                        </defs>
                        </svg></span> Templates
                </div>
                <div class="menu-item"><span class="icon"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8728 5.54443V17.36H2.4873V5.54443" stroke="url(#paint0_linear_6001_676)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.36 1H1V5.54444H17.36V1Z" stroke="url(#paint1_linear_6001_676)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.69263 9.17999H10.6672" stroke="url(#paint2_linear_6001_676)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_6001_676" x1="9.18003" y1="5.54443" x2="9.18003" y2="17.36" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            <linearGradient id="paint1_linear_6001_676" x1="9.18" y1="1" x2="9.18" y2="5.54444" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            <linearGradient id="paint2_linear_6001_676" x1="9.1799" y1="9.17999" x2="9.1799" y2="10.18" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            </defs>
            </svg></span> Collections
            </div>
                <div class="menu-item selected"><span class="icon">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.72667 1L1 4.272V15.724C1 16.1579 1.19152 16.574 1.53241 16.8808C1.87331 17.1876 2.33567 17.36 2.81778 17.36H15.5422C16.0243 17.36 16.4867 17.1876 16.8276 16.8808C17.1685 16.574 17.36 16.1579 17.36 15.724V4.272L14.6333 1H3.72667Z" stroke="url(#paint0_linear_6001_683)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 4.272H17.36" stroke="url(#paint1_linear_6001_683)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.8156 7.544C12.8156 8.41179 12.4326 9.24403 11.7508 9.85765C11.069 10.4713 10.1443 10.816 9.18009 10.816C8.21588 10.816 7.29116 10.4713 6.60936 9.85765C5.92756 9.24403 5.54453 8.41179 5.54453 7.544" stroke="url(#paint2_linear_6001_683)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_6001_683" x1="9.18" y1="1" x2="9.18" y2="17.36" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            <linearGradient id="paint1_linear_6001_683" x1="9.18" y1="4.272" x2="9.18" y2="5.272" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            <linearGradient id="paint2_linear_6001_683" x1="9.18009" y1="7.544" x2="9.18009" y2="10.816" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A259FF"/>
            <stop offset="1" stop-color="#613599"/>
            </linearGradient>
            </defs>
            </svg></span> Brands
            </div>
            </div>
            <div class="featured-section">
                <h3>FEATURED</h3>
                <div class="featured-item">Hidden gems <span class="lock-icon"> <img src="./assets/tag-pro.png" alt="tag pro"/></span></span></div>
                <div class="featured-item">Evergreen ads <span class="lock-icon"><img src="./assets/tag-pro.png" alt="tag pro"/></span></div>
                <div class="featured-item">Testing lab <span class="lock-icon"><img src="./assets/tag-pro.png" alt="tag pro"/></span></div>
            </div>
            <div class="saved-section">
                <h3>SAVED</h3>
                <div class="saved-item-container">
                <div class="saved-item">All saved</div>
                <div class="saved-item">Board name <span class="more-options">•••</span></div>
                <div class="saved-item">Board name <span class="more-options">•••</span></div>
                <div class="saved-item">Board name <span class="more-options">•••</span></div>
                <div class="saved-item">Board name <span class="more-options">•••</span></div>
                <div class="saved-item view-all">View all boards</div>
                </div>
            </div>
            <div class="bottom-section">
                <div class="menu-item">Settings</div>
                <div class="menu-item">Help & Feedback</div>
                <div class="menu-item">Join the CreativeOS Slack</div>
            </div>
            <div class="account-section">
                <span class="account-icon"></span> My Account
            </div>
        `;

    // Styles for the sidebar
    const style = document.createElement("style");
    style.textContent = `
            .sidebar {
                width: 250px;
                background-color: #f8f8f8;
                padding: 10px;
                font-family: Arial, sans-serif;
            }
            .menu-section, .featured-section, .saved-section, .bottom-section {
                margin-bottom: 20px;
            }
            .menu-item {
                padding: 10px;
                color: #333;
                cursor: pointer;
            }
                .menu-item svg {
                position: relative;
               top: 4px;
                }
            .menu-item.selected {
                border: 2px solid #9e71ef;
                border-radius: 8px;
                color: #9e71ef;
                padding: 8px;
            }
            .icon {
                margin-right: 10px;
            }
            .featured-section h3, .saved-section h3 {
                margin: 0 0 10px 0;
                color: #666;
                font-size: 14px;
            }
                .bottom-section, account-section ,.saved-item-container, .featured-section div, .menu-item{
                
                 font:medium;
                 font-weight: 550;
                 }
            .featured-item, .saved-item {
                padding: 8px 10px;
                color: #333;
                display: flex;
                justify-content: space-between;
            }
            .lock-icon {
                color: #888;
            }
            .more-options {
                cursor: pointer;
                color: #888;
            }
            .view-all {
                color: #9e71ef;
                cursor: pointer;
            }
            .account-section {
                padding: 15px 10px;
          
                border-radius: 10px;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .account-icon {
                margin-right: 10px;
                width:40px;
                height:40px;
                border-radius: 50%;
                background-color: #A259FF;
                font-size: 20px;
            }
        `;

    shadow.appendChild(style);
    shadow.appendChild(sidebar);
  }
}

customElements.define("left-sidebar", LeftSidebar);
