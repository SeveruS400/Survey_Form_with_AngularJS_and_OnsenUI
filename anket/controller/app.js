var module = angular.module('my-app', ['onsen']);
module.controller('PageController', function ($scope) {
    $scope.alert = function () {
        ons.notification.alert({ title: "", message: "Teşekkür ederiz" });
    };

    $scope.deneme = function () {
        $scope.navigator.pushpage();
        $scope.alert("messages");
    }

});