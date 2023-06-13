class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      footer{
        background-color:  blue;
        color:  yellow;
        position:fixed;
        bottom:0;
        width:100%;
        height:20px;   /* Height of the footer */


    }
    </style>

      <header>
      <a href="index.html"
      <img src="public/Logo {FD}.png" alt="FD LOGO" width="90px" height="90px">
      </a>
     <nav>
     <ul>
     <div><li><a href="index.html">Home</a></div>
     <div><li><a href="oursites.html">Our sites</a></div>
     </ul>
     </nav>
      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);