
var myModule = angular.module('Angello',
    [
        'ngRoute',
        'ngAnimate',
        'Angello.Common',
        'Angello.Storyboard',
        'ngMessages'
    ]);
    
myModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/angello/storyboard/tmpl/storyboard.html',
            controller: 'StoryboardCtrl',
            controllerAs: 'storyboard'
        })
        .when('/dashboard', {
            templateUrl: 'src/angello/dashboard/tmpl/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
        })
        .when('/users', {
            templateUrl: 'src/angello/user/tmpl/users.html',
            controller: 'UsersCtrl',
            controllerAs: 'users'
        })
        .when('/users/: userId', {
            templateUrl: 'src/angello/user/tmpl/user.html',
            controller: 'UserCtrl',
            controllerAs: 'myUser'
        })
        .when('/login', {
            templateUrl: 'src/angello/login/tmpl/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .otherwise({
            redirectTo: ' /'
        });
});

angular.module('Angello.Storyboard', [])
    .controller('StoryboardCtrl',  function ($scope, StoriesModel) {
        var storyboard = this;
        
        storyboard.currentStory = null;
        storyboard.editedStory = {};
        
        $scope.stories = StoriesModel.getStories(); 
        
        storyboard.statuses = [
            {name: 'To Do'},
            {name: 'In Progress'},
            {name: 'Code Review'},
            {name: 'QA Review'},
            {name: 'Verified'}
        ];
        
        storyboard.setCurrentStory = function(story) {
            storyboard.currentStory = story;
            storyboard.editedStory =
            angular.copy(storyboard.currentStory);
        };
    });

angular.module('Angello.Common', [])
    .service('StoriesModel', function ($http) {
        var stories = [
            {
                title: 'First story',
                description: 'Our first story.',
                criteria: 'Criteria pending.',
                status: 'To Do',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Second story',
                description: 'Do something.',
                criteria: 'Criteria pending.',
                status: 'Back Log',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Another story',
                description: 'Just one more.',
                criteria: 'Criteria pending.',
                status: 'Code Review',
                type: 'Enhancement',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            }
        ];
    
        this.getStories = function () {
            return stories;
        }; 
    });

