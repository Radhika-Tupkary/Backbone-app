const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`);
});