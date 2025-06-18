import express from 'express';
import{createstudent,getstudent,getstudentbyid,updatestudent,deletestudent} from '../controllers/studentcontroller';
const router=express.Router();
router.post('/ise',createstudent);
router.get('/student',getstudent);
router.get('/user/:id',getstudentbyid);
router.put('/:id',updatestudent);
router.delete('/:id',deletestudent)
export default router;