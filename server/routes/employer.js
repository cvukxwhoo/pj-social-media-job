import express from 'express';

// middlewares
import middlewares from '../middlewares/index.js';

// controller
import employerController from '../controllers/employerController.js';

const employerRouter = express.Router();

// Login Routes

employerRouter.post(
  '/details',
  middlewares.employer,
  employerController.postDetail
);

// employerRouter.get('/details', employerController.getAll);

export default employerRouter;
