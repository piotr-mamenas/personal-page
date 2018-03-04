export class NavbarModule {
  constructor(){
    $('.navbar-nav > li').on('click',this.onClick);

    $('#app-root').load("section-technical-blog.html");
  }

  onClick (e){
    console.log(e);
  }
}
