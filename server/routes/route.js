import express,{Router} from 'express';
import {adduser,getUsers,getUser,editUser,deleteUser} from '../controller/user-controller.js'



const router = express.Router();


router.post('/add',adduser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;