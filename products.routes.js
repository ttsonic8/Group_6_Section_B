const express = require('express')

const router = express.Router()

let products = [

    {id: 1,
     product: "Nike",
     quantity: 10,   
    } , 

    {id: 2,
     product: "Adidas",
     quantity: 10,   
    } , 

    {id: 3,
     product: "Puma",
     quantity: 10,   
    }
    
]


router.get('/', (req, res) => {
  
    let result = products;

    if(req.query.role){
        result = products.filter((product) => product.role === req.query.role);
    }

    res.status(200).json({
    "success": true,
    "data": result,
    "meta": {
    "timestamp": "2026-09-17T18:45:00.000Z",
    "count": 1
    }
    });
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((product) => product.id === id);

  if (!product){
    return res.status(404).json({
        "success": false,
        "error": {
        "code": "NOT_FOUND",
        "message": "The requested endpoint does not exist on this server."
    }
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

router.post('/', (req,res) => {
    const { product, quantity} = req.body;

    if (!product || quantity){
        return res.status(404).json({
        "success": false,
        "error": {
        "code": "NOT_FOUND",
        "message": "The requested endpoint does not exist on this server."
    }
  });
    }

    const newProduct = {
        id: products.length + 1,
        product: product,
        quantity: quantity
    }

    products.push(newProduct);

    res.status(201).json({
    "success": true,
    "data": result,
    "meta": {
    "timestamp": "2026-09-17T18:45:00.000Z",
    "count": 1
    }
    });
});



router.delete('/:id', (req,res) =>{
    const id = Number(req.params.id);
    const index = products.findIndex((product) => product.id === id);

    if (index === -1){
        return res.status(404).json({
        "success": false,
        "error": {
        "code": "NOT_FOUND",
        "message": "The requested endpoint does not exist on this server."
    }
});
}

products.splice(index, 1);

res.status(204).send();
});

module.exports = router;

    
