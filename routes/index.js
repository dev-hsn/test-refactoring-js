import express from 'express';

const router =  express.Router();

router.get('/', function(req, res) {
    res.redirect('/products/list');
});

export default router;