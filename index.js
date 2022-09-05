'use strict';

require('dotenv').config();

const server = require('./server'); // call from exported module
server.start(process.env.PORT || 3006);
