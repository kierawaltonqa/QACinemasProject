const express = require('express');

const app = express();


const server = app.listen(5019, () => {
    console.log(`server has started on port number -> :  ${server.address().port}`);
});