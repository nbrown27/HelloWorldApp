angular.module('sbAdminApp')
    .factory('userFactory', ['$http', function($http) {
    var urlBase = 'http://' + window.location.host + '/HelloWorldAPIs/users/';
    var userFactory = {};
    
    console.log(window.location.host);

    userFactory.getUsers = function () {
        return $http({
            url: urlBase+"getusers", 
            method: "GET",
            params: {sort: 'createdDate,desc'}
         });
    };
    
    userFactory.saveUser = function (user) {
        return $http.post(urlBase+"registeruser", user);
    };

    return userFactory;
}]);