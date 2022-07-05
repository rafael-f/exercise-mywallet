import express from 'express';
import postSignInController from '../controllers/auth/postSignInController.js';
import postSignUpController from '../controllers/auth/postSignUpController.js';

const authRouter = express.Router;

authRouter.post("/sign-up",postSignUpController);
authRouter.post("/sign-in",postSignInController)

export default authRouter;
