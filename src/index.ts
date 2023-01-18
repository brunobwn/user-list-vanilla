import express from 'express';

const app = express();
const port= process.env.PORT || 3000;

app.use(express.json())
app.use(express.static(__dirname+"/../public"))

app.listen(port,()=> console.log(`Server is running in port ${port}`))
