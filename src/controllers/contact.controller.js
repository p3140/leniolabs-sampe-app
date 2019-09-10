lenioApp.controller('contactController',['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.successMsg = '';
  $scope.errorMsg = '';

  $scope.sendingMsg = false;

  $scope.submitForm = function(isValid) {
  // check to make sure the form is completely valid
    if (isValid) {
      $scope.sendingMsg = true;
      $http({
          method: 'POST',
          url: 'assets/php/mailer.php',
          data: $scope.contact,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(function successCallback(response){
        $scope.successMsg = response.data.message;
        $scope.sendingMsg = false;
        $scope.contact = {};
        $scope.contactForm.$setPristine();
        $timeout(()=>{
          $scope.successMsg = '';
          $scope.errorMsg = '';
        }, 5000);
      }, function errorCallback(response){
        $scope.errorMsg = 'An error has occurred, try again in a few moments.';
        $scope.sendingMsg = false;
        $scope.contact = {};
        $scope.contactForm.$setPristine();
        $timeout(()=>{
          $scope.successMsg = '';
          $scope.errorMsg = '';
        }, 5000);
      });
    }
  };
}]);
