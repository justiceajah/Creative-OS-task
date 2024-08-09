class SearchBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create the container for the search bar
    const searchBar = document.createElement("div");
    searchBar.setAttribute("class", "search-bar");

    // Inner content of the search bar
    searchBar.innerHTML = `
            <span class="search-icon"><img src="./assets/fi-br-search.svg" alt="search-icon"/></span>
            <input type="text" class="search-input" placeholder="Search Creative OS" />
            <span class="shortcut-key">⌘ + K</span>
        `;

    // Styles for the search bar
    const style = document.createElement("style");
    style.textContent = `
            .search-bar {
                display: flex;
                align-items: center;
                width: 598px;
                max-width: 500px;
                padding: 8px 12px;
                background-color: #F5F5F5;
                border-radius: 8px;
                border: 1px solid #ddd;
                
                font-size: 16px;
            }

            .search-icon {
                margin-right: 8px;
                color: #bbb;
            }

            .search-input {
                border: none;
                outline: none;
                background: transparent;
                flex: 1;
                color: #333;
            }

            .shortcut-key {
                color: #ccc;
                font-size: 12px;
                margin-left: auto;
            }
        `;

    // Attach the created elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(searchBar);
  }
}

// Define the new element
customElements.define("search-bar", SearchBar);
