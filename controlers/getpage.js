const express = require('express');

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

const getprofile = (req, res) => {
    try{
        return res.status(200).render('profile');
    } catch(err) {
        res.status(404).send('Error 404: Page not found');
    }
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
    getlogout,
}