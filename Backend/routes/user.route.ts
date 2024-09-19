import express, { Router } from 'express';
import { login, logout, register, updateProfile } from '../controller/user.controller';
import isAuthenticated from '../middlewares/isAuthenticated';

import {singleUpload} from "../middlewares/multer";

const router: Router = express.Router();
router.route('/register').post(singleUpload , register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile/update').post (isAuthenticated,singleUpload ,updateProfile);


export default router;