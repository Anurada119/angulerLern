var portfolioApp = angular.module('portfolioApp', ['ngRoute','ngAnimate']);

portfolioApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/projects/:id', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);

portfolioApp.controller('SubHeaderCtrl', ['$scope', function ($scope) {
    $scope.linkedin = 'https://www.linkedin.com/in/anurada119/';
    $scope.facebook = 'https://www.facebook.com/anurada119';
    $scope.github = 'https://github.com/Anurada119';
    $scope.dribbble = 'https://dribbble.com/Anurada';
    $scope.twitter = 'https://twitter.com/iamanurada';
    $scope.behance = 'https://www.behance.net/anurada';
}]);


portfolioApp.controller('qSliderCtrl', ['$scope', function($scope){
   $scope.name = 'Anurada';
   $scope.quotes = [

      // maximum 6 quotes [ otherwise go add more styles tp simplerotator.css ]

      {
         quoteContent : '"Time spent doing useless but interesting and fun things, is never wasted..."',
         author: 'Me !'
      },
      {
         quoteContent : '"People don’t use a product because of the great design; great design helps them use the product."',
         author: 'Viran Dayaratne'
      },
      {
         quoteContent : '“If we want users to like our software we should design it to behave like a likeable person: respectful, generous and helpful.”',
         author: 'Alan Cooper'
      },
      {
         quoteContent : '“As far as the customer is concerned, the interface is the product.”',
         author: 'Jef Raskin'
      },
      {
         quoteContent : '“Your most unhappy customers are your greatest source of learning.”',
         author: 'Bill Gates'
      },
      {
         quoteContent : '“Design used to be the seasoning you’d sprinkle on for taste; now it’s the flour you need at the start of the recipe.”',
         author: 'John Maeda'
      }
   ];
}]);


portfolioApp.controller('MainCtrl', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.myGreeting = 'Hi, I\'m Anurada';
    $scope.things = "Full Process Design";
    $scope.pageClass = "main-page"

    $http({
        method: 'GET',
        url: '../data/posts.json'
    }).then(function (posts, data) {
        $scope.posts = posts.data;
        $scope.postUi = new PostUI(posts.data);

        // console.log($scope.posts)
        // console.log($scope.postUi);
    });

}]);

portfolioApp.controller('PostsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.pageClass = 'post-page';
    $scope.singlePost = $scope.posts[$routeParams.id];
    //console.log($scope.singlePost)
    $scope.singlePostUi = new Post($scope.singlePost);
    //console.log($scope.singlePostUi)
}]);

portfolioApp.controller('SideNavCtrl', ['$scope', function ($scope) {
    $scope.links = [{
            linkname: 'Home',
        },
        {
            linkname: 'About'
        }
    ];

    $scope.myEmail = 'anurada119@gmail.com';
}]);

function PostUI(obj) {
    var vm = this;
    vm.postList = [];

    if (obj) {
        obj.forEach(function(e) {
            vm.postList.push(new Post(e));
        }, this);
    }
}

function Post(obj) {
    var vm = this;
    vm.postId = obj.id;
    vm.postTitle = obj.postTitle;
    vm.postYear = obj.postYear;
    vm.postCategory = obj.postCategory;
    vm.postClass = obj.postClass;
    vm.postBGUrl = obj.postBGUrl;
    vm.postTagList = [];
    // obj.postTags.forEach(function (e) {
    //     vm.tagsLits.push(new Tags(e));
    // })
    obj.postTags.forEach(function (e) {
        vm.postTagList.push(new Tags(e));
    })
}

function Tags(obj) {
    var vm = this;
    vm.tagNames = obj;
}

// function SinglePostUI(obj) {
//     var vm = this;
//     vm.spostId = obj.id;
//     vm.spostTitle = obj.postTitle;
//     vm.spostYear = obj.postYear;
//     vm.spostCategory = obj.postCategory;
//     vm.spostClass = obj.postClass;
//     vm.spostBGUrl = obj.postBGUrl;
//     vm.spostTagList = [];

//     obj.postTags.forEach(function (e) {
//         vm.spostTagList.push(new sTags(e));
//     });
// }

// function sTags(obj) {
//     var vm = this;

//     vm.eachTag = obj;
// }
