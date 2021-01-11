const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
const Path = require('path')
const bodyParser = require('body-parser')
const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/users1', require('./Routes/UsersRoutes/Users'))
app.listen(process.env.PORT || 4000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
