export class NavbarModule {
  constructor(){
    $('.navbar-nav > li > a').on('click',this.onClick);

  }

  onClick (){
    let route = $(this).data("route");
    let appRoot = $('#app-root');

    switch(route){
      case "blog":
          appRoot.load("section-technical-blog.html");
      break;
      case "dotnet":
          appRoot.load("section-dotnet.html");
      break;
      case "databases":
          appRoot.load("section-databases.html");
      break;
      case "machine-learning":
          appRoot.load("section-machine-learning.html");
      break;
      case "health-and-fitness":
          appRoot.load("section-health-and-fitness.html");
      break;
      case "linguistics":
          appRoot.load("section-linguistics.html");
      break;
      case "about-me":
          appRoot.load("section-about-me.html");
      break;
    }
    localStorage.setItem("currentRoute",appRoot[0].firstChild.id);
    console.log(appRoot);
    console.log(this);
  }

  method(){
    console.log('hello');
  }
}
