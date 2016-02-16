var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'partials/home',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'partials/about',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/menu', {
            templateUrl : 'partials/menu',
            controller  : 'menuController'
        })

        .when('/contact', {
            templateUrl : 'partials/contact',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
app.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'home';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'about';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us!';
});
