const mongoose = require('mongoose')


const data1Schema = new mongoose.Schema({

    name: {
        type:String,
        required: true
    },
    tech: {
        type: String,
        required:true
    },
    working: {
        type:Boolean,
        required:true,
        defaoult: false
    }





})
module.exports = mongoose.model('Data',data1Schema)