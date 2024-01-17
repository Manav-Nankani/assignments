const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index");
const { JWT_SECRET } = require("../../04-mongo-with-jwt-auth/config");

// User Routes
router.post('/signup', async (req, res) => {
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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response= await Course.find({})
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username;

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
    // const token = req.headers.authorization;
    // const decodedToken = jwt.verify(token, JWT_SECRET);
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