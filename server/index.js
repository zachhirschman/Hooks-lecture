const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())
const controller = require('./friendController')

// REST ENDPOINTS
app.get('/api/get-friends', controller.getFriends)
app.post('/api/post-friend', controller.postFriend)
app.delete('/api/delete-friend/:id', controller.deleteFriend)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Ready to rumble on port ${PORT}`))