var menuControllers = angular.module('menuControllers', []);

menuControllers.controller('menuListController', ['$scope', 'Menus', 'Customers', function ($scope, Menus, Customers) {
    var days = [];
    var customers = [];
    $scope.newMenu = {};

    Menus.query(function (menus) {
        var lastDate, d = null;
        angular.forEach(menus, function (menu) {
            if (!lastDate || lastDate != menu.Date)
            {
                lastDate = menu.Date;
                var day = {};
                d = new Date(lastDate);
                day.DisplayDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
                day.Menus = [];
                days.push(day);
            }
            menu.DisplayDate = days[days.length - 1].DisplayDate;
            days[days.length - 1].Menus.push(menu);
        });
        $scope.days = days;
        if (lastDate)
        {
            $scope.newMenu.Date = days[days.length - 1][0].DisplayDate;
        }
        else
        {
            d = new Date();
            $scope.newMenu.Date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
        }
    });

    Customers.query(function (result) {
        $scope.customers = result;
    });

    $scope.onClickAddNewMenu = function () {
        $scope.addNewMenu = true;
    };

    $scope.addNewMenu = false;

    $scope.onClickAddNewMenuSubmit = function (newMenu) {
        if (newMenu.Date && newMenu.Date.trim() != "" && newMenu.CustomerId)
        {
            Menus.save(newMenu, function () {
                $scope.addNewMenu = false;
            });
        }
    };

    $scope.onClickAddNewMenuCancel = function () {
        $scope.addNewMenu = false;
    };

}]);