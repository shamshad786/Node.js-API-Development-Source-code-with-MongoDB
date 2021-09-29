const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({


    name:{
        type: 'String',
        required: "name is required",
        minlength:3,
        maxlength:20,
        trim:true
    },

    company:{
        type: 'String',
        required: "company name is required",
        minlength:4,
        maxlength:20,
        trim:true

    },
    address:{
        type: 'String',
        required: "address is required",
        minlength:5,
        maxlength:40,
        trim:true
    },
    mobile:{
        type: 'Number',
        required: true,
        minlength:10,
        maxlength:16,
        trim:true
    },
    designation:{
        type: 'String',
        required: true,
        minlength:2,
        maxlength:20,
        trim:true
    }

});

module.exports = mongoose.model("Post", postSchema);