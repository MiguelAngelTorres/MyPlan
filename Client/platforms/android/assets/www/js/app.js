var app = angular.module('MyApp', ['ionic', 'MyApp.controllers','MyApp.services',]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })                                   
  .state('tab.public', {
    url: '/public',
    views: {
      'public': {
        templateUrl: "templates/public.html"
      }
    }
  })                                  
  .state('tab.private', {
    url: '/private',
    views: {
      'private': {
        templateUrl: "templates/private.html"
      }
    }
  })                                    
  .state('tab.promotions', {
    url: '/promotions',
    views: {
      'promotions': {
        templateUrl: "templates/promotions.html"
      }
    }
  })
  .state('login', {
    url: '/login',
		templateUrl: "templates/login.html"
				
  })
;
  $urlRouterProvider.otherwise('/login');
});


