var menuControllers = angular.module('menuControllers', []);

menuControllers.controller('menuListController', ['$scope', 'Menus', 'Customers', function ($scope, Menus, Customers) {
    var days = {};
    var customers = [];
    $scope.newMenu = {};
    $scope.addNewMenu = false;
    $scope.editing = null;

    Menus.query(function (menus) {
        var lastDate;
        angular.forEach(menus, function (menu) {
            if (!lastDate || lastDate != menu.Date)
            {
                lastDate = menu.Date;
                var day = {};
                day.DisplayDate = utils.getDisplayDate(lastDate);
                day.Menus = [];
                days[lastDate] = day;
            }
            menu.DisplayDate = days[lastDate].DisplayDate;
            days[lastDate].Menus.push(menu);
        });
        $scope.days = days;
        if (lastDate)
        {
            $scope.newMenu.Date = days[lastDate].Menus[0].DisplayDate;
        }
        else
        {
            $scope.newMenu.Date = utils.getDisplayDate();
        }
    });

    Customers.query(function (result) {
        $scope.customers = result;
    });

    $scope.onClickAddNewMenu = function () {
        $scope.addNewMenu = true;
    };

    $scope.onClickAddNewMenuSubmit = function (newMenuData) {
        if (newMenuData.Date && newMenuData.Date.trim() != "" && newMenuData.CustomerId)
        {
            var newMenu = new Menus(newMenuData);
            newMenu.$save(function (menu, headers) {
                var day = $scope.days[menu.Date];
                if (null == day)
                {
                    day = {};
                    day.DisplayDate = utils.getDisplayDate(menu.Date);
                    day.Menus = [];
                }
                day.Menus.push(menu);
                $scope.addNewMenu = false;
            });
        }
    };

    $scope.onClickAddNewMenuCancel = function () {
        $scope.addNewMenu = false;
    };

    $scope.onClickEdit = function (menu) {
        $scope.editing = menu.Id;
    };

    $scope.onClickSaveEdit = function (newMenu) {
        $scope.editing = null;
    };

    $scope.onClickCancelEdit = function () {
        $scope.editing = null;
    };

    $scope.isEditingMe = function (id) {
        return $scope.editing == id;
    }

}]);