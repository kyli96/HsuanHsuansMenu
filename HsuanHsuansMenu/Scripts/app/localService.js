var menuServices = angular.module('menuServices', ['ngResource']);

menuServices.factory('Menus', ['$resource', function menusFactory($resource) {
    return $resource('/Scripts/app/menus.json', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
}]);

menuServices.factory('Customers', ['$resource', function customerFactory($resource) {
    return $resource('/api/Customers/:id');
}]);