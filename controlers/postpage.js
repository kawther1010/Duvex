const express = require('express');
const { findOne } = require('../models/model.buyer');

const Buyer = require('../models/model.buyer');
const Product = require('../models/model.product');
const Sale = require('../models/model.sale');

//not complited yet
const postaddchart = (req, res) => {
    Buyer.findOne({email: req.cookies.email}, async(err, docs) => {
        try{
            let newSale = await new Sale({
                email: req.cookies.email,
                address: req.body.address,
                product: "casque",
                quantity: req.body.quantity,
                delivered: req.body.delivered,
            });
            const savedsale = await newSale.save();
            return res.status(200).send("new sale done, it will be delivered in 3 days maximum.");
        } catch(err){
            console.log(err);
            res.status(404).send("Error 404: Page not found");
        }
    });
}

//not completed yet
const postaddproduct = async(req, res) => {
    try{
        let newProduct = await new Product({
            name: req.body.name,
            category: req.body.category,
            availablity: req.body.availablity,
            rating: req.body.rating,
        });
        const savedproduct = await newProduct.save();
        return res.status(200).json("new Product added successfully.");
    } catch(err){
        console.log(err);
        res.status(404).send("Error 404: Page not found");
    }
}



module.exports = {
    postaddchart,
    postaddproduct,
}
