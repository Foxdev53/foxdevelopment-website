class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
      <center>
     <div><a href="index.html">Home</a></div>
    <div><a href="oursites.html">Our sites</a></div>
    </center>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);