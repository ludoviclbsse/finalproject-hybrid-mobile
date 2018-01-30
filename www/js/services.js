angular.module('starter.services', [])
    .factory('BackendAPI', function ($http) {
        var baseURL = "https://api.backendless.com/297247C0-956E-829B-FFB9-1E245C998600/FEDDC3FC-7A62-3B98-FF08-1B6C865B3400/";
        var header = {'Content-Type': 'application/json'};
        return {
            register: function (data) {
                return $http.post(baseURL + "users/register", data, header);
            },
            login: function (data) {
                return $http.post(baseURL + "users/login", data, header);
            },
            courses: function() {
                return $http.get(baseURL + "data/myCourses", header);
            }
        };
    })
