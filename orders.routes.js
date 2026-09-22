const express = require ('express');
const router = express.Router();

    let orders = [
    {
        id:1,
        item:'laptop',
        price: 20000
    }, 
    {
        id: 2,
        item:'tablet',
        price:17000
        
    },
    {
        id: 3,
        item:'cellphone',
        price:10000
    }
]

router.get('/', (req,res) => {
    let result = orders;

    if(req.query.role){
        result = orders.filters((orders) => orders.role === req.query.role);

        res.status(200).json({
            'success': true,
            'data': [...],
            'meta':{
            'timestamp': "2026-09-17T18:45:00.000Z",
            'count': 1
            }
    })
    }
})

router.get('/:id', (req,res) => {
    const id = number
})

router.post('/', (req,res) => {
    

})

router.delete('/:_id', (req,res) => {

})

module.export = router;