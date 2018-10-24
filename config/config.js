const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'vorzeigenpure'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vorzeigenpure-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'vorzeigenpure'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vorzeigenpure-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'vorzeigenpure'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/vorzeigenpure-production'
  }
};

module.exports = config[env];
