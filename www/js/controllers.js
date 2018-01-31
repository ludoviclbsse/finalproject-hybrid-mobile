angular.module('starter.controllers', [])

    .controller('LoginCtrl', function ($scope, $state, BackendAPI) {
        $scope.loginUser = {login: null, password: null};
        $scope.goToSignup = function () {
            $state.go('signup');
        };

        $scope.doLoging = function () {
            BackendAPI.login($scope.loginUser)
                .then(function (res) {
                    $state.go('tab.profile');
                })
                .catch(function (err) {
                    console.log("Connection error : " + JSON.stringify(err));
                })
                .finally(function () {
                    console.log("Finish ");
                });
        };
    })

    .controller('SignupCtrl', function ($scope, BackendAPI, $state) {
        $scope.newUser = {firstname: null, lastname: null, email: null, password: null};

        $scope.doSignup = function () {
            BackendAPI.register($scope.newUser)
                .then(function (res) {
                    $state.go('tab.profile');
                })
                .catch(function (err) {
                    console.log("Connection error : " + JSON.stringify(err));
                })
                .finally(function () {
                    console.log("Finish ");
                });
        };
    })

    .controller('ProfileCtrl', function ($scope) {
    })

    .controller('CoursesCtrl', function ($scope, BackendAPI) {
        $scope.Courseslist = BackendAPI.courses()
            .then(function (res) {
                $scope.Courseslist = res.data;
                console.log(res);
            })
            .catch(function (err) {
                console.log("Connection error : " + JSON.stringify(err));
            })
            .finally(function () {
                console.log("Finish ");
            });
    })

    .controller('LessonsCtrl', function ($scope, BackendAPI, $stateParams) {
        $scope.Lessonslist = BackendAPI.lessons()
            .then(function (res) {
                $scope.Lessonslist = res.data;
                console.log(res);
            })
            .catch(function (err) {
                console.log("Connection error : " + JSON.stringify(err));
            })
            .finally(function () {
                console.log("Finish ");
            });
        $scope.currentCategory = $stateParams.lessonCode;
    })

    /*
    .controller('AccountCtrl', function ($scope) {
        $scope.regObj = {
            "email": '',
            "password": ''
        };
    })*/
    ;
