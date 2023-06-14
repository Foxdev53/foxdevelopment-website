class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <header>
      <img src="/public/Logo {FD}.png" alt="Logo" class="logo">
    <span>
     <a href="index.html">Home</a>
     </span>
     <span>
     <a href="ourteam.html">Our team</a>
     </span>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);