'use strict';
var router = require('express').Router();
var db = require('../../db');
var handler = require('../workHorse/writeFile')
var User = db.model("user");
var Page = db.model("page");
var Project = db.model("project");
var ncp = require('ncp');

//creates HTML and CSS
router.post('/', function (req, res, next){
  Page.create(req.body)
  .then(function(result){
    return result.setProject(req.body.projectId)
  })
  .then(function(posted){
    return handler.renderHTML(posted.html)
  })
  .then(function(looking){
    return handler.copyCSS()
  })
  .then(function(created){
    return res.sendStatus(201)
  })
  .catch(next)
});

//retrieves pages
router.get('/', function (req, res, next){
  Page.findAll({
  where:{
    userId:req.user.id
  }
})
  .then(function(result){
    res.send(result)
  })
  .catch(next)
});


module.exports = router;