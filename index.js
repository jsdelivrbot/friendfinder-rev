// ========================================================================
// DEPENDENCIES
// ========================================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 5000

// ========================================================================
// EXPRESS
// ========================================================================

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/nvd.api+json" }));
app.use(sassMiddleware({
	src: path.join(__dirname, 'app/scss'),
	dest: path.join(__dirname, 'app/public')
}));


// ========================================================================
// ROUTER
// ========================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ========================================================================
// PORT
// ========================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

//express()
 // .use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))
