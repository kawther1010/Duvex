const express = require('express');
const Buyer = require('../models/model.buyer');
const Sale = require('../models/model.sale');

const gethome = (req, res) => {
    try{
        res.status(200).render('home');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}

const getregister = (req, res) => {
    try{
        res.status(200).render('register');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}

const getlogin = (req, res) => {
    try{
        res.status(200).render('login');
    } catch(err){
        res.status(404).send('Error 404: Page not found.');
    }
}

const gethomepage = (req, res) => {
    try{
        res.status(200).render('homepage');
    } catch(err){
        res.status(404).send('Page 404: Page not found');
    }
}

//working on displaying buyer infos on his profile
const getprofile = (req, res) => {
    Buyer.findOne({email: req.cookies.email}, (err, docs) => {
        try{
            return res.status(200).render('profile', {
                firstName: docs.firstName,
                lastName: docs.lastName
            });
        } catch(err) {
            res.status(404).send('Error 404: Page not found');
        }
    });
}

const getbill = (req, res) => {
    try{
        res.status(200).render('bill');
    } catch(err){
        res.status(404).send('Page 404: Page not found');
    }
}

const getsalesList = (req, res) => {
    Sale.find({email: req.cookies.email}, (err, docs) => {
        try{
            return res.status(200).render('salesList', {
                salesList: docs,
                /*
                product: sale.product,
                quantity: sale.quantity,
                delivered: sale.delivered,
                */
            });
        } catch(err) {
            return res.status(404).send('Error 404: Page not found');
        }
    });
}

const getlogout = (req, res) => {
    try{
        return res.cookie("token", null, {maxAge: 1}).status(200).redirect('/');
    } catch (err){
        return res.status(403).send('Error 403: Forrebiden');
    }
}

module.exports = {
    gethome,
    getregister,
    getlogin,
    gethomepage,
    getprofile,
    getbill,
    getsalesList,
    getlogout,
}
