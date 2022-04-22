const express = require('express');
const router = express.Router();

const postpage = require('../controlers/postpage');

router.post('/homepage', postpage.postaddchart)

module.exports = router;