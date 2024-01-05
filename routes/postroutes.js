const express = require('express');
const router = express.Router();

const postpage = require('../controlers/postpage');

router.post('/homepage/bill', postpage.postaddchart);
router.post('/homepage/addProduct', postpage.postaddproduct);

module.exports = router;