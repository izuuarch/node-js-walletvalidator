const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const authroutes = require('./Routes/auth.js');
//  set up the view engines
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
app.set('views', path.join(__dirname,'views'));
app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );
app.set('view-engine','handlebars');
// end of setting the view engine

app.get('/' , (req,res) => {
    res.render('home');
  });
app.use('/user', authroutes);

app.use((req,res,next) => {
   const error = new Error('not found');
   error.status = 404;
   next(error);
});
app.use((error, req,res,next) => {
    res.status(500).json({
        message:"someting is wrong",
        error:error.message
    })
});
app.listen(3000, () => {
    console.log(`server started on port 3000`);
 });