const mongoose = require('mongoose');

const { MONGODB_URL } = process.env
const MONGODB_URI = MONGODB_URL

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))