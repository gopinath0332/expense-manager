var express = require('express');
var router = express.Router();
const moment = require('moment');
const mongoose = require('mongoose');
const expense = require('../model/expense.model');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const resultSet = await expense.find().sort({
        entry: 1
    });
    res.json(resultSet);
});

router.get('/:from/:to', async (req, res, next) => {
    const resultSet = await expense.find({
        entry: {
            $gte: new Date(req.params.from),
            $lte: new Date(req.params.to),
        }
    }).sort({
        entry: 1
    });
    res.json(resultSet);
});

router.post('/', async (req, res, next) => {
    const payload = new expense({
        entry: new Date(req.body.entry),
        amount: req.body.amount,
        paymentType: req.body.paymentType,
        category: req.body.category,
        notes: req.body.notes
    });
    try {
        const data = await payload.save();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;