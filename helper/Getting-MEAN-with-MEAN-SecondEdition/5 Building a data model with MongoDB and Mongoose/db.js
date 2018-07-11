const mongoose = require('mongoose');
const readLine = require ('readline');
const dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);



const readLine = require ('readline');
if (process.platform === 'win32'){
  const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ('SIGINT', () => {
    process.emit ("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};


process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

mongoose.connection.on('connected', () => {
    // Monitoring for successful connection through Mongoose
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
    // Checking for connection error
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  // Checking for disconnection event
    console.log('Mongoose disconnected');
});

// ---------------------------------------------------------------
const mongoose = require('mongoose');
// Define database connection string and use it to open Mongoose connection
const dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

// Listen for Mongoose connection events and output statuses to console
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Reusable function to close Mongoose connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Listen to Node processes for termination or restart signals, and call gracefulShutdown function when appropriate, passing a continuation callback
// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

/** ------------------------------------------------------ */
// Using multiple databases
const dbURIlog = 'mongodb://localhost/Loc8rLog';
const logDB = mongoose.createConnection(dbURIlog);
logDB.on('connected', () => {
  console.log(`Mongoose connected to ${dbURIlog}`);
});
logDB.close( () => {
  console.log('Mongoose log disconnected');
});


