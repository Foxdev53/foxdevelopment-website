class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      footer{
        background-color:  red;
        color:  yellow;
        position:fixed;
        bottom:0;
        width:100%;
        height:40px;   /* Height of the footer */


    }
    </style>

      <footer>
      <left>
      This Site Was Made by Fox Development.   
      </left>
      <right>
      <a href="https://foxdevelopment.netlify.app/public/sitemap.txt" class="fa fa-sitemap"></a>
      <a href="https://twitter.com/Foxdev53" class="fa fa-twitter"></a>
      <a href="https://github.com/Foxdev53/foxdevelopment-website" class="fa fa-github"></a>
      <a href="https://youtube.com/@Foxdev53" class="fa fa-youtube"></a>
      </right>   
      </footer>
      

      `;
    }
  }
  
  customElements.define('my-footer' ,  Footer);