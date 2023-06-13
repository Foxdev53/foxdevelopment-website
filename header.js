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
      <a href=index.html
      <img src=public/Logo {FD}.png">
     </a>
     <nav>
     <ul>
     <li><a href=#>X</a>
     </ul>
     </nav>

      </header>
      

      `;
    }
  }
  
  customElements.define('my-header', Header);