require('dotenv').config({ path: '~/downloadsvideos/.env'})

const credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.ACCESS_TOKEN
}

module.exports = credentials