const express = require('express');
const router = express.Router();

//Models
const Student = require('../models/Student');

 // Post request - create a new customers
router.post("/",  async (req,res)=>{
	try {
		let student= new Student(req.body);
		await student.save(); //async
		res.json({
			status:true,
			student:student
			
		});
	} catch (err) {
		res.status(500).json({
			success:false,
			message:err.message
		})
	}
});
//Get request - get all student
router.get("/", async (req,res)=>{
	try {
		let student = await Student.find();
		res.json({
			status:true,
			student:student
			});
	} catch (err) {
			res.status(500).json({
			success:false,
			message:err.message
		})
	}
});
// Delete request - delete a single student
router.delete("/:id", async (req,res)=>{
    try {
        let deletedstudent = await Student.findOneAndDelete({_id : req.params.id});
        if(deletedstudent){
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
