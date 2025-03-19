let express = require('express')
let app = express()
let fs = require('fs')
let data = JSON.parse(fs.readFileSync("students.json","utf-8"))
// let data = fs.readFileSync("students.json","utf-8")

//Read all data 
app.get('/',(req,res)=>{
    // res.send('Hello World')
    res.json(data)
})

//Read perticular ID record
app.get('/:id',(req,res)=>{
    let id = req.params.id

    let stud = data.find((s)=> s.id === (+id) )
    res.json(stud)
})

//delete record of that perticular ID
app.delete('/:id',(req,res)=>{
    let id = req.params.id

    let Index = data.findIndex((s)=> s.id === (+id) )
    // res.send(JSON.stringify(Index))
    
    if(Index == -1)
        {
            res.send("Invalid ID")
        }
        else
        {
            data.splice(Index,1)
            
            fs.writeFileSync("students.json",JSON.stringify(data))
            res.send('Data deleted')
        }   
    
})

// app.use(express.urlencoded({extended:false}))

app.use(express.json())

//SAVE data 
app.post('/',(req,res)=>{
    
//    let stud = {
//         "id": 9,
//         "name": "Shiv",
//         "age": 2000,
//         "email": "shiv@buzzfeed.com",
//         "gender": "Male"
//     }

    let stud = req.body
    

    data.push(stud)
    fs.writeFileSync("students.json",JSON.stringify(data))
    res.send('Data Saved')
  
})



app.listen(2300,()=> console.log('Server started'))

 
