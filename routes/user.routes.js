const express = require('express').Router

const app = express()

let users =[ 
    {
    id: 1,
    name: "raymond",
    email: "raymondjayvilllanueva@gmail.com",
    role: "user"
    }
]

app.get('/', (req,res) =>{
    let result = users;

    if(req.query.role) {
        result = users.filter((user) => user.role === req.query.role);
    }

    res.status(200).json({
         "success": true,
         "data": result,
         "meta": {
         "timestamp": "2026-09-17T18:45:00.000Z",
         "count": 1
    }
});
})

app.get('/:id', (req,res) => {
const id = Number(req.params.id);
const index = users.findIndex((user) => user.id === id);

    if (!user){
        return res.status(404).json({
          "success": false,
          "error": {
          "code": "NOT_FOUND",
          "message": "The requested endpoint does not exist on this server."
  },
});
    };

   res.status(200).json({
         "success": true,
         "data": result,
         "meta": {
         "timestamp": "2026-09-17T18:45:00.000Z",
         "count": 1
    }
});
});

app.post('/', (req,res) =>{
     const { name, email, role } = req.body;

     if (!name || !email || !role){
        return res.status(400).json({
          "success": false,
          "error": {
          "code": "BAD_REQUEST",
          "message": "Missing mandatory fields or malformed payload."
  }  
});
};

 const newUser = {
     id: users.length + 1,
    name: name,
    email: email,
    role: role,
 }

 users.push(newUser);

 res.status(201).json({
         "success": true,
         "data": [newUSer],
         "meta": {
         "timestamp": "2026-09-17T18:45:00.000Z",
         "count": 1
    },
});
});

app.delete('/:id', (req,res) => {
const id = Number(req.params.id);
const index = users.findIndex((user) => user.id === id);

if (index === -1){
    return res.status(404).json({
          "success": false,
          "error": {
          "code": "NOT_FOUND",
          "message": "The requested endpoint does not exist on this server."
  },  
});
}
users.splice(index, 1);

res.status(204).send();
});
module.expoerts = Router;