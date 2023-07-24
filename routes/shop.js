const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../helper/path');


router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});
  
router.post('/submit-contact', (req, res, next) => {
    
    res.redirect('/success');
});

router.get('/success',(req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;
