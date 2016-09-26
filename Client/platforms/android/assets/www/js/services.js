var app = angular.module('MyApp.services',[])
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
})

app.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
});

