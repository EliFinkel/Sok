// Create.js

const express = require('express');
const router = express.Router();

const message = require('../../lib/middleware/MessageCrud.js');
router.put('/', (req, res, next) => {
 


    let newMessage = {
    	Value : req.body.Value,
    	Author : req.body.Author,
    	ChatGroup : req.body.ChatGroup,
    	TimeStamp : new Date(),
    	Status : true
    };

    message.create(newMessage).then((data) => {

        let response = {
            response : data,
            success : true,
            error : ""
        };

        res.json(response);

    }).catch((err) => {

        let response = {
            response : null,    
            success : false,
            error : err
        };

        

        res.json(response);

    });



});


module.exports = router;