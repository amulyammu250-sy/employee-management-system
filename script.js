const API="http://localhost:5000/employees";

function addEmployee(){

const name=document.getElementById("name").value;
const role=document.getElementById("role").value;

fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,role})
})
.then(()=>loadEmployees());

}

function loadEmployees(){

fetch(API)
.then(res=>res.json())
.then(data=>{

const list=document.getElementById("list");
list.innerHTML="";

data.forEach(emp=>{
const li=document.createElement("li");
li.innerText=emp.name+" - "+emp.role;
list.appendChild(li);
});

});

}

loadEmployees();