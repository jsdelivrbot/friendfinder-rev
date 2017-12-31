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


