import { Router } from 'express';
import auth from './auth';
import account from './account';


let routerApp = new Router();

routerApp.use('/auth', auth);
routerApp.use('/account', account);


export default routerApp;