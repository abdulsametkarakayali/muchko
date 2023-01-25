const express = require('express');
const router = express.Router();

// Post request - create a new Lesson
const Lesson = require('../models/Lesson');

// Post request - create a new lesson
 router.post("/",  async (req,res)=>{
	try {
		let lesson= new Lesson(req.body);
		await lesson.save(); //async
		res.json({
			status:true,
			lesson:lesson
			
		});
	} catch (err) {
		res.status(500).json({
			success:false,
			message:err.message
		})
	}
});

//Get request - get all Lesson
router.get("/", async (req,res)=>{
    try {
        let lesson = await Lesson.find();
     res.json({
        status:true,
        lesson:lesson
    });
    } catch (err) {
    res.status(500).json({
        success:false,
        message:err.message
    })
    }
});

// Delete request - delete a single Lesson
router.delete("/:id", async (req,res)=>{
    try {
        let deletedlesson = await Lesson.findOneAndDelete({_id : req.params.id});
        if(deletedlesson){
            res.json({
                status:true,
                message:"successfully deleted"
            });
        }    
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
});
module.exports = router;
