
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();


router.get('/help', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'help.html'));
});
router.post('/help', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})
module.exports = router;
