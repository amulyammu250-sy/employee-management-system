const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let employees = [];

app.get("/", (req,res)=>{
res.send("Employee Management API Running");
});

// CREATE
app.post("/employees",(req,res)=>{
employees.push(req.body);
res.json({message:"Employee added"});
});

// READ
app.get("/employees",(req,res)=>{
res.json(employees);
});

// UPDATE
app.put("/employees/:id",(req,res)=>{
employees[req.params.id]=req.body;
res.json({message:"Employee updated"});
});

// DELETE
app.delete("/employees/:id",(req,res)=>{
employees.splice(req.params.id,1);
res.json({message:"Employee deleted"});
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});