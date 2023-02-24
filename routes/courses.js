const express = require("express");
const router = express.Router();

const {list, detail,category, edit, add, store, update, removeConfirm,remove} = require("../controllers/coursesController");
const { uploadImagesCourse } = require("../middlewares/uploadIMG");
const addCourseValidator = require("../validations/addCourseValidator");
const editCourseValidator = require("../validations/editCourseValidator");

/* /courses */

router    
    .get("/list", list)
    .get("/detail/:id", detail)
    .get('/category/:idCategory',category) 
    .get('/add',add)
    .post('/add', uploadImagesCourse, addCourseValidator,store)
    .get('/edit/:id',edit)
    .put('/update/:id',uploadImagesCourse, editCourseValidator,update)
    .get('/remove/:id',removeConfirm)
    .delete('/remove/:id',remove)
module.exports = router;
