
import prisma from '../prismaa/client';


export const createstudentservice = async (data: { name: string; age: number; address: string; email: string; schoolId: number }) => {
    try {
        return await prisma.student.create({ data });
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

export const getallstudentservice = async () => {
    try {
        return await prisma.student.findMany();
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

export const getstudentbyidservice = async (id: number) => {
    try {
        const student = await prisma.student.findUnique({ where: { id } });
        return student;
    } catch (error) {
        console.error(`Error fetching student with ID ${id}:`, error);
        throw error;
    }
};

export const updatestudentservice = async (id: number, data: any) => {
    try {
        return await prisma.student.update({ where: { id }, data });
    } catch (error) {
        console.error(`Error updating student with ID ${id}:`, error);
        throw error;
    }
};

export const deletestudentservice = async (id: number) => {
    try {
        return await prisma.student.delete({ where: { id } });
    } catch (error) {
        console.error(`Error deleting student with ID ${id}:`, error);
        throw error;
    }
};
