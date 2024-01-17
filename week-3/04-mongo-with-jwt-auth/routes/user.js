const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course , User} = require("../../03-mongo/db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const{username, password }= req.body

    await User.create({
        username,
        password
    })
    res.json({
        message: "user created succesfully"
    })
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password

    const user =await User.find({
        username,
        password
    })
    if(user) {
        const jwtToken = jwt.sign({user}, JWT_SECRET)
        res.json({
            jwtToken
        })
    } else {
        res.json({
            msg: "wrong credentials"
        })
    }
});



router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.header.username

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase Complete"
    })


});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
    

    const user =await User.findOne({
        username,
    })
    if(user) {
        const purchasedCourses = user.purchasedCourses;
        res.status(200).json({
            courses: purchasedCourses
        })
    }
});

module.exports = router