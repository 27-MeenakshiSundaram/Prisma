import express from 'express';
import studentroutes from './routes/studentroutes';
const app=express();
app.use(express.json());
app.use('/',studentroutes);
const PORT=3000;
app.listen(PORT,()=>{
    console.log('Server running at http://localhost:${PORT}')
});