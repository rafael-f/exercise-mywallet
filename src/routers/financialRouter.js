import express from 'express';
import getFinancialEvController from '../controllers/financial/getFinancialEvController.js';
import getFinancialEvSumController from '../controllers/financial/getFinancialEvSumController.js';
import postFinancialEvController from '../controllers/financial/postFinancialEvController.js';

const financialRouter = express.Router();

financialRouter.post("/financial-events", postFinancialEvController);
financialRouter.get("/financial-events", getFinancialEvController);
financialRouter.get("/financial-events/sum",getFinancialEvSumController);

export default financialRouter;