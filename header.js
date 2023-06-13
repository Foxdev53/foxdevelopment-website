class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
     <div><a href="index.html">Home</a></div>
    <div><a href="oursites.html">Our sites</a></div>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);