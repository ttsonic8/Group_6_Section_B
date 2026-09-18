const express = require('express')

const app = express()

express.json()

let data = [{
    id: 1,
    name: "Dog",
}]

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/me', require('./routes/users.routes'))

app.get('/api/users', (res,req) => {
    return res.json({
        ...data
    })
})

app.get('/api/products')

app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})