lenioApp.directive('inputIsValid', function(){
    return {
      restrict: 'EA',
      templateUrl: 'src/directives/input-is-valid/input-is-valid.directive.html',
      scope: {
        input: '='
      },
      link: function($scope, element, attrs) {
        $scope.$watch('input', function() {
          //console.log($scope.input);
        });
      }
    };
  });
