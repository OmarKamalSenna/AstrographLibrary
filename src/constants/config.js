export default {
  server: {
    port: 8080,
  },
  database: {
    uri: 'mongodb://wafey:Goodjob123@ds127391.mlab.com:27391/astrograph',
    reseed: true,
  },
  auth: {
    header: 'x-auth-token',
    secret: 'F5bBnXPObTA3b1Ys7z0CdvGvCaIE82hLBNktmz7T',
  },
  masterAdmin: {
    _id: '507f1f77bcf86cd799439024',
    username: 'admin',
    password: 'password',
    name: {
      first: 'Mr',
      last: 'Admin',
    },
    mobile: '012212345678',
    email: 'admin@gmail.com',
  },
};
