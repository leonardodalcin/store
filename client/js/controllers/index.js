app.controller('index', ['$scope', '$resource', function ($scope, $resource) {
  console.log('leleo')
  
  var Meetup = $resource('/api/meetups');

  Meetup.query(function (results) {
    $scope.meetups = results;
  });

  $scope.meetups = []
  console.log('leleo')
  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }
}]);