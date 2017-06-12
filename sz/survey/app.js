
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        })
        // url will be /form/stress
        .state('form.stress', {
            url: '/stress',
            templateUrl: 'form-stress.html'
        })
        // url will be /form/distraction
        .state('form.distraction', {
            url: '/distraction',
            templateUrl: 'form-distraction.html'
        })
        // url will be /form/complacency
        .state('form.complacency', {
            url: '/complacency',
            templateUrl: 'form-complacency.html'
        })
        // url will be /form/pressure
        .state('form.pressure', {
            url: '/pressure',
            templateUrl: 'form-pressure.html'
        })
        // url will be /form/fatigue
        .state('form.fatigue', {
            url: '/fatigue',
            templateUrl: 'form-fatigue.html'
        })
        // url will be /form/norms
        .state('form.norms', {
            url: '/norms',
            templateUrl: 'form-norms.html'
        })
        // url will be /form/teamwork
        .state('form.teamwork', {
            url: '/teamwork',
            templateUrl: 'form-teamwork.html'
        })
        // url will be /form/resources
        .state('form.resources', {
            url: '/resources',
            templateUrl: 'form-resources.html'
        })
      	// url will be /form/communication        
         .state('form.communication', {
            url: '/communication',
            templateUrl: 'form-communication.html'
        })
      	// url will be /form/assertiveness        
         .state('form.assertiveness', {
            url: '/assertiveness',
            templateUrl: 'form-assertiveness.html'
        })
      	// url will be /form/awareness        
         .state('form.awareness', {
            url: '/awareness',
            templateUrl: 'form-awareness.html'
        })       
       	// url will be /form/knowledge        
         .state('form.knowledge', {
            url: '/knowledge',
            templateUrl: 'form-knowledge.html'
        })
        // url will be /form/submit        
         .state('form.submit', {
            url: '/submit',
            templateUrl: 'form-submit.html'
        });
       
    // catch all route
    // send users to the form page 
    //$urlRouterProvider.otherwise('/form/profile');
    $urlRouterProvider.otherwise('/form/stress');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});

