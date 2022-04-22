const express = require('express');
const routes = express.Router();

const getpage = require('../controlers/getpage');

routes.get('/', getpage.gethome);
routes.get('/register', getpage.getregister);
routes.get('/login', getpage.getlogin);
routes.get('/homepage', getpage.gethomepage);
routes.get('/homepage/profile', getpage.getprofile);
routes.get('/homepage/logout', getpage.getlogout);

module.exports = routes;
