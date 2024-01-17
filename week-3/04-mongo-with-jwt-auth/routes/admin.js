const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,User, Course} = require("../db")
const router = Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username =  req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
    res.json({
        message: "Admin created successfully"
    })
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username =  req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if(user){

        const jwtToken = jwt.sign({username}, JWT_SECRET)
        res.json({
            jwtToken
        })
    } else{
        res.status(411).json({
            msg: "Incorrect email and pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title,description,imageLink,price}= req.body

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    console.log(newCourse);
    res.json({
        message: "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({})
    res.json({
        courses: response
    })
});

module.exports = router;