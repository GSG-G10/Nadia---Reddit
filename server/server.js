const app = require('./app.js');


app.listen(app.get('PORT'),() => {
    console.log(`server run at : http://localhost:${app.get('PORT')} `);
})