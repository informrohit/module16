const express = require('express')
const data1 = require('../models/data1')
const router = express.Router()
const Data = require('../models/data1')



router.get('/',async(req,res) =>{
    try {
              const data = await Data.find()
              res.json(data)
    } catch (err) {
          res.send('Error ' + err)
        
    }
})

router.get('/:id',async(req,res) =>{
    try {
              const data1 = await Data.findById(req.params.id)
              res.json(data1)
    } catch (err) {
          res.send('Error ' + err)
        
    }
})

router.post('/', async(req,res) => {


    const data1 = new Data({
        name: req.body.name,
        tech: req.body.tech,
        working: req.body.working
    })
    try {
         const a1 = await data1.save()
         res.json(a1)
    }catch(err) {
          res.send('Error')
    }
})

router.delete('/data1/:id',function(req,res,){
    try {
              Data.findByIdAndRemove({_id:req.params.id}).then(function(data1){
                  res.send(data1);

              })

    } catch (err) {
          res.send('Error ' + err)
        
    }
});
router.put('/data1/:id',function(req,res,next){
    try {
              Data.findByIdAndUpdate({_id:req.params.id},req.body).then(function(data1){
                  Data.findOne({_id:req.params.id}).then(function(data1){
                    res.send(data1);
                 
                  });
                  

              });

    } catch (err) {
          res.send('Error ' + err)
        
    }
});
router.options("/data",(req,res)=>{
    res.json({messag:"options is working"})
})


module.exports = router