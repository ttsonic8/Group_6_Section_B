const express = require('express')

const app = express()

app.use(express.json())

app.use('/', require('./routes/users.routes'))
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/me', require('./routes/users.routes'))

app.use((req,res) => {
    res.status(404).json({
        success: false,
        error: {
            code: "Not Found",
            message: "The requested endpoint does not exist on this server"
        }
    });
});

app.listen(1234, () => {
	console.log('Server is running on http://localhost:1234')
})