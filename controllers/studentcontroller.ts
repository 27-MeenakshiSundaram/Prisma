import {Request,Response}from 'express';
import { Prisma } from '../generated/prisma';
import{
    createstudentservice,
    getallstudentservice,
    getstudentbyidservice,
    updatestudentservice,
    deletestudentservice
} from '../services/studentservice';
export const createstudent=async(req:Request,res:Response)=>{
    try{
        const{name,age,address,email,schoolId}=req.body;
        const Student=await createstudentservice({name,age,address,email,schoolId});
        res.status(201).json(Student);
    }catch(error){
        res.status(400).json({error:'Create student failed'});
    }
};
export const getstudent=async(req:Request,res:Response)=>{
    try{
        const students=await getallstudentservice();
        res.json(students);
    }catch(error){
        res.status(500).json({error:'Get student failed!!'});
    }
};
export const getstudentbyid=async(req:Request,res:Response)=>{
    try{
        const studentss=await getstudentbyidservice(Number(req.params.id));
        if (!studentss){ 
             res.status(404).json({error:'Student not found'});
             return 
        } 
        res.json(studentss);
    }catch(error){
        res.status(500).json({error:'Get student failed'});
    }
};
export const updatestudent=async(req:Request,res:Response)=>{
    try{
        const data =req.body as Prisma.StudentCreateInput
        const studentd=await updatestudentservice(Number(req.params.id),req.body);
        res.json(studentd);
    }catch(error){
        res.status(400).json({error:'Student update failed'});
    }
};
export const deletestudent=async(req:Request,res:Response)=>{
    try{
        await deletestudentservice(Number(req.params.id));
        res.json({message:'studentdeleted!!'});
    }catch(error){
        res.send(400).json({error:'Student Delete failed'});
    }
};