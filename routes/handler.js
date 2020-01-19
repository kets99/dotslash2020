var express = require('express');

var router = express.Router();

var path = require('path');
//var queries = require(path.join(__dirname,'../model/queries'));
// const mime = require('mime');
//var multer = require('multer');
var request = require('request');
//var query = require('.././model/queries');

router.get('/',(req,res)=>{
    console.log("here?");
   res.render('packages',{layout : 'packages.handlebars'});

});


router.get('/basics',(req,res)=>{
    console.log("here?");
   res.render('basics',{layout : 'basics.handlebars'});

});


router.get('/banks',(req,res)=>{
    console.log("here?");
   res.render('banks',{layout : 'banks.handlebars'});

});


router.get('/loans',(req,res)=>{
    console.log("here?");
   res.render('loans',{layout : 'loans.handlebars'});

});


// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
router.get('/ip',(req,res)=>{

    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    console.log("hi");
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/ip?q1=1&q2=1&q3=1&q4=1&q5=1&q6=1&q7=1&q8=1&q9=1 
    // so, first name = Mike and last name = Will 
    var process = spawn('python',["./user_class.py", 
                            req.query.q1, 
                            req.query.q2,
                            req.query.q3,
                            req.query.q4,
                            req.query.q5,
                            req.query.q6,
                            req.query.q7,
                            req.query.q8,
                            req.query.q9] ); 
  
    console.log("hi2");
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
    console.log(data+'send to front end ');
    } ) 
  

});
  
// save code as start.js 


module.exports=router;
