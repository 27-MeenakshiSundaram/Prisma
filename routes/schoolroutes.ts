import express from 'express';
import{createschool,getschool,getschoolbyid,updateschool,deleteschool} from  '../controllers/schoolcontroller'
const router=express.Router();
router.post('/post',createschool);
router.get('/school',getschool);
router.get('/student/:id',getschoolbyid);
router.put('/:id',updateschool);
router.delete('/:id',deleteschool);
export default router;