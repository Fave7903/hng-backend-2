const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('HNG9 Stage 2 Task')
})

app.post('/', (req, res) => {
    let operation = req.body.operation_type
    let ans = 0
    if (operation === 'addition') {
        ans = req.body.x + req.body.y
    } else if (operation === 'subtraction') {
        ans = req.body.x - req.body.y
    } else if (operation === 'multiplication') {
        ans = req.body.x * req.body.y
    }
    return res.json({
        slackUsername: "Soar",
        operation_type: operation,
        result: ans
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))