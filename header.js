class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <header>
     <nav>
     <ul>
     <div>
     <li><a href="index.html">Home</a>
     </div>
     <div>
     <li><a href="oursites.html">Our sites</a>
     </div>
     </ul>
     </nav>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);