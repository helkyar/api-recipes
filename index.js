var app = require('express')();
port = 3003;

app.use(require('express').json());
app.use('/v1', require('./routes'));


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});