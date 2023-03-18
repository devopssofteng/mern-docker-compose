const mongoose = require('mongoose')

mongoose
    .connect('mongodb://43.205.239.243:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
