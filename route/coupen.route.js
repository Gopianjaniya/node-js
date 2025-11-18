const express = require('express');
const { insertCoupen } = require('../controller/coupen.controller');

const coupenRoute = express.Router();

coupenRoute.post("/insert", insertCoupen)

module.exports = { coupenRoute}