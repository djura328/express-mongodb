const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
     res.status(200).json({message: 'GET'})
});

router.post('/', (req, res, next) => {
     res.status(200).json({message: 'POST'})
});

router.patch('/:id', (req, res, next) => {
     res.status(200).json({message: 'Update', id: req.params.id})
});

router.delete('/:id', (req, res, next) => {
     res.status(200).json({message: 'Delete', id: req.params.id})
});

module.exports = router;