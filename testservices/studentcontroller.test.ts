
import { createstudent } from '../controllers/studentcontroller';
import { Student } from '../generated/prisma';
import { mockPrisma } from '../mock/mockprisma';
import * as studentService from '../services/studentservice';
jest.mock("../prismaa/client",()=>({
    __esModule:true,
    default:mockPrisma,
}))
describe("Student service",()=>{
    describe("Add student",()=>{
        it("Add new Student",async()=>{
            const mockreturndata:Student={
                id:1,
                name:'Sundar',
                age:25,
                address:'Madurai',
                email:'sundar@gamil.com',
                schoolId:1
            };
            const idata={
                name:"Sundar",
                age:25,
                address:"Madurai",
                email:'sundar@gmail.com',
                schoolId:1
            };
            mockPrisma.student.create.mockResolvedValue(mockreturndata);
            const returndata=await studentService.createstudentservice(idata);
            console.log(returndata);
            expect(returndata).toEqual(returndata);
            expect(mockPrisma.student.create).toHaveBeenCalledWith({data:idata});

        });
    });
    it("Get all students details",async()=>{
        const data:Student[]=[
            {
                id:1,
                name:'Sundar',
                age:25,
                address:'Madurai',
                email:'sundar@gamil.com',
                schoolId:1
             },
             {
                id:1,
                name:'vishnu',
                age:22,
                address:'Madurai',
                email:'vishnu@2003.com',
                schoolId:1
             }
    ];
    mockPrisma.student.findMany.mockResolvedValue(data);
    const studentdata=await studentService.getallstudentservice();
    expect(studentdata).toEqual(data)
    });

    it("Get Particular Student details",async()=>{
        const data:Student={
             id:1,
             name:'Sundar',
             age:25,
             address:'Madurai',
             email:'sundar@gamil.com',
             schoolId:1
        };
        mockPrisma.student.findUnique.mockResolvedValue(data);
        const student=await studentService.getstudentbyidservice(11);
        expect(student).toEqual(data);
        expect(mockPrisma.student.findUnique).toHaveBeenCalledWith({where:{id:11}});
    });
    it("Update student Details",async()=>{
        const data:Student={
              id:11,
             name:'Sundar',
             age:25,
             address:'Madurai',
             email:'sundar@gamil.com',
             schoolId:1
        };
        mockPrisma.student.update.mockResolvedValue(data);
        const updatedata:Student=await studentService.updatestudentservice(11,{address:"banglore"});
        expect(data).toEqual(updatedata);
        expect(mockPrisma.student.update).toHaveBeenCalledWith({
            where:{id:11},
            data:{address:"banglore"},
        });
    });
    it("Delete student details",async ()=>{
        const data:Student={
              id:11,
             name:'Sundar',
             age:25,
             address:'Madurai',
             email:'sundar@gamil.com',
             schoolId:1
        };
        mockPrisma.student.delete.mockResolvedValue(data);
        const deletestudent=await studentService.deletestudentservice(11);
        expect(data).toEqual(deletestudent);
        expect(mockPrisma.student.delete).toHaveBeenCalledWith({where:{id:11}});
    });
});

