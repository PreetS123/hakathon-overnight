     

     const express= require('express');
     const cors= require('cors');
     require('dotenv').config();

     const app= express();


     app.use(express.json());



     app.listen(process.env.PORT,()=>{
        console.log(`Listening on port ${process.env.PORT}`);
     })