const express = require('express');
const router = express.Router();

// Models
const HomeWork = require('../models/HomeWork');

// Post request - create a new homework
router.post("/",  async (req,res)=>{
	try {
		let homework= new HomeWork(req.body);
		await homework.save(); //async
		res.json({
			status:true,
			homework:homework
			
		});
	} catch (err) {
		res.status(500).json({
			success:false,
			message:err.message
		})
	}
});

//Get request - get all homework
router.get("/", async (req,res)=>{
	try {
		let homework = await HomeWork.find();
		res.json({
			status:true,
			homework:homework
			});
	} catch (err) {
			res.status(500).json({
			success:false,
			message:err.message
		})
	}
});

// Delete request - delete a single homework
router.delete("/:id", async (req,res)=>{
    try {
        let deletedhomework = await HomeWork.findOneAndDelete({_id : req.params.id});
        if(deletedhomework){
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
