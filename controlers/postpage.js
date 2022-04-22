const express = require('express');
const { findOne } = require('../models/model.buyer');

const Buyer = require('../models/model.buyer');

//not complited yet
const postaddchart = (req, res) => {
    Buyer.findOne({email: req.cookies.email}, async(err, docs) => {
        try{
            await Buyer.updateOne({email: req.cookies.email}, {
                chart:"casque"
            }, { new: true });
            console.log(docs);
            res.status(200).send(docs);
        } catch(err){
            console.log(err);
            res.status(404).send("Error 404: Page not found");
        }
    });
}

module.exports = {
    postaddchart,
}
