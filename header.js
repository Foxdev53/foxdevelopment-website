class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
     <nav>
     <div>
     <li><a href="index.html">Home</a> <li><a href="oursites.html">Our sites</a>
     </nav>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);