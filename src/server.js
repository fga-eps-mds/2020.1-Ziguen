import app from './app';


const port = process.env.PORT || 3333;



/* app.get("/",(req,res)=>{
    res.json({"tes1": "Hello wolrd" })
}) */

app.listen(port);