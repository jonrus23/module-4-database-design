const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router
  .route('/')
  .get(courseController.getAllcourses)
  .post(courseController.createcourse);

router
  .route('/:id')
  .get(courseController.getcourse)
  .patch(courseController.updatecourse)
  .delete(courseController.deletecourse);

module.exports = router;
