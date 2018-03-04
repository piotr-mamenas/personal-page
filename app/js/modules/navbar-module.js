export class NavbarModule {
  constructor(){
    $('.navbar-nav > li > a').on('click',this.onClick);

    $('#app-root').load("section-technical-blog.html");
  }

  onClick (){
    let route = $(this).data("route");

    switch(route){
      case "blog":
          $('#app-root').load("section-technical-blog.html");
      break;
      case "dotnet":
          $('#app-root').load("section-dotnet.html");
      break;
      case "databases":
          $('#app-root').load("section-databases.html");
      break;
      case "machine-learning":
          $('#app-root').load("section-machine-learning.html");
      break;
      case "health-and-fitness":
          $('#app-root').load("section-health-and-fitness.html");
      break;
      case "linguistics":
          $('#app-root').load("section-linguistics.html");
      break;
      case "about-me":
          $('#app-root').load("section-about-me.html");
      break;
    }
    console.log(route);
    console.log(this);
  }

  method(){
    console.log('hello');
  }
}
