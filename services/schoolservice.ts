import prisma from "../prismaa/client";
export const createschoolservice=async (data:{name:string;city:string;email:string})=>{
    try{
        return await prisma.school.create({data});
    }catch(error){
        console.error('error creating school:',error);
        throw error;
    }
};
export const getallschooldetailsservice=async()=>{
    try{
        return await prisma.school.findMany();
    }catch(error){
        console.error('Error Fetching school details:',error);
        throw error;
    }
};
export const getschoolbyidservice=async(id:number)=>{
    try{
        const school=await prisma.school.findUnique({where:{id}});
        return school;
    }catch(error){
        console.error(`Error Fetching school with ID ${id}:`,error);
        throw error;
    }
};
export const updateschoolservice = async (id: number, data: any) => {
    try {
        return await prisma.school.update({ where: { id }, data });
    } catch (error) {
        console.error(`Error updating school with ID ${id}:`, error);
        throw error;
    }
};
export const deleteschoolservice = async (id: number) => {
    try {
        return await prisma.school.delete({ where: { id } });
    } catch (error) {
        console.error(`Error deleting school with ID ${id}:`, error);
        throw error;
    }
};