App.factory('factory', function ($http, $location) {

  var api = 'https://astrograph-library.herokuapp.com/api';
  var token = null;
  var isAdmin = null;
  var id = null;
  var pid = null;

  return {
    login: function (credentials) {
      return $http({
        method: 'POST',
        url: api + '/login',
        data: JSON.stringify(credentials)
      });
    },

    register: function (math) {

      return $http({
        method: 'POST',
        url: api + '/signup',
        data: JSON.stringify(math)
      });
    },
    createAdmin: function (inf) {
      return $http({
        method: 'POST',
        url: api + '/admins',
        headers: {
          'x-auth-token': token
        },
        data: JSON.stringify(inf)
      });
    },

    getProfile: function () {
      return $http({
        method: 'GET',
        url: api + '/profile',
        headers: {
          'x-auth-token': token
        }
      });
    },

     actList: function () {
      return $http({
        method: 'GET',
        url: api + '/activity-types',
        headers: {
          'x-auth-token': token
        }
      });
    },
    businessRegister: function (info) {
      return $http({
        method: 'POST',
        url: api + '/business-registrations',
        headers: {
          'x-auth-token': token
        },
        data: JSON.stringify(info)
      });
    },

   addNewActivity :function(info) {
      return $http({
        method: 'POST',
        url: '/',
         headers: {
          'x-auth-token': token
        },
        data: JSON.stringify(info)
      });
    },

    //   editActivity :function(info) {
    //   return $http({
    //     method: 'POST',
    //     url: api + '/profile',
    //      headers: {
    //       'x-auth-token': token
    //     },
    //     data: JSON.stringify(info)
    //   });
    // },

    deleteActivity :function() {
      return $http({
        method: 'DELETE',
        url: api + '/activity-types/'+ id,
         headers: {
          'x-auth-token': token
        }
        //data: JSON.stringify(inf)
      });
    },


    deleteActivityType: function () {
      return $http({
        method: 'DELETE',
        url: api + '/activity-types/' + id,
        headers: {
          'x-auth-token': token
        }
        //data: JSON.stringify(inf)
      });
    },
    editActivityType: function (inf) {
      return $http({
        method: 'PUT',
        url: api + '/activity-types/' + id,
        headers: {
          'x-auth-token': token
        },
        data: JSON.stringify(inf)
      });
    },
    addActivityType: function (inf) {
      return $http({
        method: 'POST',
        url: api + '/activity-types',
        headers: {
          'x-auth-token': token
        },
        data: JSON.stringify(inf)
      });
    },

    isVisitor: function () {
      return !token;
    },

    setToken: function (newToken) {
      token = newToken;
    },


    setAdmin: function () {
      isAdmin = true;
    },
    setID: function (newID) {
      id = newID;
    },
    getID: function () {
      return id;
    },

    setClient: function () {
      isAdmin = false;
    },
    setPid: function (newPid) {
      pid = newPid;
    },

    getPid: function () {
      return pid;
    },


    isAdmin: function () {
      return isAdmin;
    },

    isClient: function () {
      return !isAdmin;
    }
  };
});
