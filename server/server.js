const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public'))


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'b2a4ea2f10784bb8bea86b11b29da5dc',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let owners = []

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



app.listen(4000, () => {
    rollbar.info('user is visiting our agency')
    console.log(`server running on 4000`)
})

app.post('/api/adopt', (req, res) => {
    let { name, email, message } = req.body

    try {
        const newOwners = {
            name: '${name}',
            email: '${email}',
            message: '{message}'
        }

        owners.push(newOwners)

    } catch (err) {
        rollbar.err('you are not getting any owner data')
        console.log(err)
    }
})