class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
     
     <div>
     <li><a href="index.html">Home</a>
    <div><li><a href="oursites.html">Our sites</a></div>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);