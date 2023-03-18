const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllloans)
  .post(loanController.createloan);

router
  .route('/:id')
  .get(loanController.getloan)
  .patch(loanController.updateloan)
  .delete(loanController.deleteloan);

module.exports = router;