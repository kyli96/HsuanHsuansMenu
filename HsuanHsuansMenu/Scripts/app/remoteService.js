var menuServices = angular.module('menuServices', ['ngResource']);

menuServices.factory('Menus', ['$resource', function menusFactory($resource) {
    return $resource('/api/Menus/:id');
}]);

menuServices.factory('Customers', ['$resource', function customerFactory($resource) {
    return $resource('/api/Customers/:id');
}]);
