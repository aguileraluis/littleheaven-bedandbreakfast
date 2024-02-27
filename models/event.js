const mongoose = require('mongoose'); 

const eventSchema = mongoose.Schema({ 
    imageurl: {
        type: String,
        required: true
    }, 
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String
    }, 
    column: {
        type: String, 
        required: true
    },
    link: {
        type: String, 
        required: false
    },
    backgroundColor: {
        type: String, 
        required: true
    }
},
    {
        timestamps: true
    }
)

const eventModel = mongoose.model('events', eventSchema); 

module.exports = eventModel; 

