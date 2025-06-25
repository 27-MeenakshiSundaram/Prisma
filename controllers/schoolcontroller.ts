import { Request,Response } from "express";
import { Prisma } from "../generated/prisma";
import{
    createschoolservice,
    getallschooldetailsservice,
    getschoolbyidservice,
    updateschoolservice,
    deleteschoolservice
}from '../services/schoolservice';
export const createschool=async(req:Request,res:Response)=>{
    try{
        const{name,email,city}=req.body;
        const school=await createschoolservice({name,email,city});
        res.status(201).json(school);
    }catch(error){
        res.status(400).json({error:'Create Schooldetails failed'});
    }
};
export const getschool=async(req:Request,res:Response)=>{
    try{
        const schools=await getallschooldetailsservice();
        res.json(schools);
    }catch(error){
        res.status(500).json({error:'Get schooldetails failed!!'});
    }
};
export const getschoolbyid=async(req:Request,res:Response)=>{
    try{
        const schools=await getschoolbyidservice(Number(req.params.id));
        if (!schools){ 
             res.status(404).json({error:'Schooldetails not found'});
             return 
        } 
        res.json(schools);
    }catch(error){
        res.status(500).json({error:'Get schooldetails failed'});
    }
};
export const updateschool=async(req:Request,res:Response)=>{
    try{
        const data =req.body as Prisma.SchoolUpdateInput
        const schoolid=await updateschoolservice(Number(req.params.id),req.body);
        res.json(schoolid);
    }catch(error){
        res.status(400).json({error:'Schooldetails update failed'});
    }
};
export const deleteschool=async(req:Request,res:Response)=>{
    try{
        await deleteschoolservice(Number(req.params.id));
        res.json({message:'schooldetails deleted!!'});
    }catch(error){
        res.send(400).json({error:'Schooldetails Delete failed'});
    }
};