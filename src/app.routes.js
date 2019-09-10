// Router's configuration
lenioApp.config(function($routeProvider) {
  $routeProvider
  // route for the contact page
  .when('/', {
    templateUrl : 'src/pages/contact.html',
    controller  : 'contactController'
  })
    // route for the home page
  .when('/home', {
    templateUrl : 'src/pages/home.html',
    controller  : 'homeController'
  })
    // route for the about page
  .when('/about', {
    templateUrl : 'src/pages/about.html',
    controller  : 'aboutController'
  })
    // route for the contact page
  .when('/contact-us', {
    templateUrl : 'src/pages/contact.html',
    controller  : 'contactController'
  });
});
