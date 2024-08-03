import express from "express";
const port = 8000;
import products from './products.js'

const app = express();
app.get("/", (req,res) => {
    res.send("API is running...")
});
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    return res.json(products.find(p=>p._id === req.params.id))
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});
