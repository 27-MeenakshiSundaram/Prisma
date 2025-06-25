import { PrismaClient } from "../generated/prisma";
const prisma=new PrismaClient();
async function main(){
    await prisma.school.createMany({
        data:[
            {name:'PREM',email:'Prem22@gmail.com',city:'chennai'},
            {name:'SBOA',email:'Sboa23@gmail.com',city:'banglore'}
        ],
    });
}
main()
.then(()=>{
    console.log("Seeder Successfully!!");
})
.catch((e)=>{
    console.error(e);
    process.exit(1);
})
.finally(async()=>{
    await prisma.$disconnect();
})