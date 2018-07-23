import express from "express";
import bodyParser from "body-parser";

// make instance of express
const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
let router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", function (req, res) {
	res.json({
		message: "Our very own api"
	});
});

// Register the routes
app.use("/", router);
let port = process.env.PORT || 8080; // set our port

// Start the SERVER
app.listen(port);
console.log("Server the jjfrunning on: http://localhost:" + port);
console.log("the server Server running on: http://localhost:" + port);
console.log("Server running on: http://localhost:" + port);
