/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const socket = require('socket.io');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post('/MnistPages', function (req, res) {
  var nme = req.body.Name;
  console.log(nme);
});


// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
const server = app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

const io = socket(server);

io.on('connection', function(socket){
<<<<<<< HEAD

  socket.on('Mnist Parameters', function(msg) {
    console.log(msg);
    var options = {
      args: [msg.epochs, msg.batchSize, msg.l1Neurons, msg.l2Neurons]
    };

    var PythonShell = require('python-shell'); 
    var pyshell = new PythonShell('C:/Users/daneh/MnistApplication/server/vanilla_nn.py', options);

    

    pyshell.on('message', function (message) { 
      // received a message sent from the Python script (a simple "print" statement)  
      console.log(message);
      pyshell.end();
    });

=======
  var PythonShell = require('python-shell'); 
  var pyshell = new PythonShell('C:/Users/daneh/MnistApplication/server/vanilla_nn.py');

  pyshell.on('message', function (message) { 
    // received a message sent from the Python script (a simple "print" statement)  
    console.log(message);
    pyshell.end();
>>>>>>> 69c77d7a6dbf8800d8b71dfc41adaf0fbe3b64a1
  });
});


