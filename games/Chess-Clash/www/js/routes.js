angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/iGClash.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html',
      controller:'menuCtrl'
    })
      
    
      
        
    .state('menu.iG-Battle', {
      url: '/battle',
      views: {
        'side-menu22': {
          templateUrl: 'templates/iG-Battle.html',
          controller: 'iG-BattleCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.dashBoard', {
      url: '/dashboard',
      views: {
        'side-menu22': {
          templateUrl: 'templates/dashBoard.html',
          controller: 'dashBoardCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.kingdomProfile', {
      url: '/profile',
      views: {
        'side-menu22': {
          templateUrl: 'templates/kingdomProfile.html',
          controller: 'kingdomProfileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.challengeKingdom', {
      url: '/challenge ',
      views: {
        'side-menu22': {
          templateUrl: 'templates/challengeKingdom.html',
          controller: 'challengeKingdomCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.requestLifeTime', {
      url: '/lifetime',
      views: {
        'side-menu22': {
          templateUrl: 'templates/requestLifeTime.html',
          controller: 'requestLifeTimeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.giveUpBattle', {
      url: '/giveup',
      views: {
        'side-menu22': {
          templateUrl: 'templates/giveUpBattle.html',
          controller: 'giveUpBattleCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.switchUser', {
      url: '/switchuser',
      views: {
        'side-menu22': {
          templateUrl: 'templates/switchUser.html',
          controller: 'switchUserCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/battle');

});