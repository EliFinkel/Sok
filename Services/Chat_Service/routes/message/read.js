// Create.js
const cleanGetQuery = require('../../lib/middleware/cleanGetQuery');
const express = require('express');
const router = express.Router();
const messgae = require('../../lib/middleware/MessageCrud.js');

router.get('/', (req, res, next) => {

 let query = {
  value : req.query.value,
  author : req.query.author,
  chatGroup : req.query.chatGroup,
  timeStamp : req.query.timeStamp,
  status : req.query.status
};
query  = cleanGetQuery(query);

message.read(query).then((data) => {
  let response = {
    query : query,
    response : data,
    success : true,
    error : ""
  };
  res.json(response);
}).catch((err) => {
    let response = {
      query : query,
      response : null,
      success : false,
      error : err
    };
    res.json(response);
});



});


module.exports = router;