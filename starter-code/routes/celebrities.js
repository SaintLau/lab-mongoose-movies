const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

//to have all the celebs
router.get('/celebrities', (req, res) => {
    Celebrity.find() //the find() method
    .then((celebritiesFromDB) => {
        res.render('celebrities/index', {celebrities: celebritiesFromDB})
    })
    .catch((err) => {
        res.render('error', {err});
    })
});

//to create a new celebrity
router.get('/celebrities/new', (req, res) => {
    res.render('celebrities/new'); //route callback
});


//to have a celeb by id and show details
router.get('/celebrities/:celebrityId', (req, res) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findById(celebrityId)
    .then((theCelebrityFromDB) => {
        res.render('celebrities/show', { celebrity: theCelebrityFromDB } );
    })
    .catch((err) => {
        res.render('error', {err});
    })
});


//To create a new celeb
router.post('/celebrities/new', (req, res) => {
    const { name, occupation, catchPhrase} = req.body; //keys to create the new celeb
    Celebrity.create( { name, occupation, catchPhrase })
    .then(() => {
        res.redirect('/celebrities');
    });
});


//To delete a celeb
router.post('/celebrities/:celebrityId/delete', (req, res) => {
    const celebrityId = req.params.celebrityId;
    Celebrity.findByIdAndRemove(celebrityId)
    .then(() => {
        res.render('/celebrities');
    });
});




module.exports = router;