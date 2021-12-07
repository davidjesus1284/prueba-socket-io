require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const Server = require('./src/models/server');
const port = process.env.PORT;

const server = new Server();



server.listen(port);