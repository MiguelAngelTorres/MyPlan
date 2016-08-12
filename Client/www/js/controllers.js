var app = angular.module('MyApp.controllers', []);

app.service('Events', function() {
		return {
        eventos: [],
        getEvents: function() {
            return this.eventos;
        },
        addEvent: function(item) {
            this.eventos.push(angular.copy(item));
        }
    }
});

app.controller('TodoCtrl', function($scope, $ionicModal,Events) {
  $scope.events = {};

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-event.html', function(modal) {
    $scope.eventModal = modal;
  }, {
    scope: $scope,
    animation: 'bounce-in'
  });

  // Called when the form is submitted
  $scope.createEvent = function(event) {
    Events.addEvent({
      title: event.title,
			descrip: event.descrip,
			img: 'img/avatar.jpg',
			map: 'img/map.jpg'
    });
    $scope.eventModal.hide();
    event.title = "";
		event.descrip = "";
  };

  // Open our new modal
  $scope.newEvent = function() {
    $scope.eventModal.show();
  };

  // Close the new modal
  $scope.closeNewEvent = function() {
    $scope.eventModal.hide();
  };
})


app.controller('LoginCtrl', function($scope) {

  // Called when the form is submitted
  $scope.login = function(email,password) {
    email = "";
		password = "";
  };
})

app.controller('AskEvent', function($scope,Events) {
  $scope.publics = Events.getEvents();

})
