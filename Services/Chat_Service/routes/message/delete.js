// delete.js

const express = require('express');
const router = express.Router();
const cleanGetQuery = require('../../lib/middleware/cleanGetQuery');

const message = require('../../lib/middleware/MessageCrud.js');
router.delete('/', (req, res, next) => {



    let query = {
        Value : req.body.Value,
        Author : req.body.Author,
        ChatGroup : req.body.ChatGroup,
        TimeStamp : req.body.TimeStamp,
        Status : req.body.Status
    };

    console.log(req)

    query = cleanGetQuery(query);

    message._delete(query).then((data) => {

        let response = {
            query : query,
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