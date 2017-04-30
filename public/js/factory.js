App.factory('factory', function($http, $location) {

  var token = null;
  var isAdmin = null;

  return {
    login: function(credentials) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/login',
        data: JSON.stringify(credentials)
      });
    },

    getProfile: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/profile',
        headers: {
          'x-auth-token': token
        }
      });
    },

    isVisitor: function() {
      return !token;
    },

    setToken: function(newToken) {
      token = newToken;
    },

    setAdmin: function() {
      isAdmin = true;
    },

    setClient: function() {
      isAdmin = false;
    },

    isAdmin: function() {
      return isAdmin;
    },

    isClient: function() {
      return !isAdmin;
    }
  };
});
