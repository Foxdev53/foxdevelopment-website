class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
    <span>
     <a href="index.html">Home</a>
     </span>
     <span>
     <a href="oursites.html">Our sites</a>
     <span>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);