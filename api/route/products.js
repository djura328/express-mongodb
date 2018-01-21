const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
     res.status(200).json({message: 'its work'})
});

module.exports = router;