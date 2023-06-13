class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
      
     <div><a href="index.html">Home</a></div>
   <left><a href="oursites.html">Our sites</a></left>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);