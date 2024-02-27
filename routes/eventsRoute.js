const express = require("express"); 
const router = express.Router(); 

const Event = require('../models/event'); 

router.get('/getallevents', async(req, res) => {

    try {
        const events = await Event.find({}); 
        return res.send(events); 
    } catch(error) {
        return res.status(400).json({ message: error }); 
    }
});


router.post('/geteventbyid', async(req, res) => {

    const eventid = req.body.eventid;

    try {
        const room = await Event.findOne({ _id : eventid })
        return res.send(event); 
    } catch(error) {
        return res.status(400).json({ message: error }); 
    }
});

router.post("/addevent", async(req,res) => {

    try {
        const newevent = new Event(req.body);
        await newevent.save(); 

        return res.send('New Event Added Successfully');
    } catch (error) {
        return res.status(400).json({ error }); 
    }
})

module.exports = router; 