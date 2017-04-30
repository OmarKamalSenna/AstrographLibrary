App.factory('factory', function($http, $location) {
  var username = 'john.doe';

  var token = null;

  return {
    /** All these functions can be called from all controllers 
    */

    /** e.g.
     * 
     * factory.setUsername('jane.doe') 
     */

    /** e.g.
     * 
     * factory.getFries()
     * .then(function(response) {
     *  
     * })
     * .catch(function(response) {
     * 
     * });
    */

    ////////////////

    login: function(credentials) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/login',
        data: JSON.stringify(credentials)
      });
    },

    setToken: function(newToken) {
      token = newToken;
    },

    getActivities: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/activities',
        headers: {
          'x-auth-token': token
        }
      });
    },

    //////////////////

    getUsername: function() {
      return username;
    },

    setUsername: function(newUsername) {
      username = newUsername;
    },

    getFries: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/fries'
      });
    },

    createRecipe: function(body) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/recipe',
        data: JSON.stringify(body)
      });
    }
  };
});
