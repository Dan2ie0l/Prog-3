/*var os = require("os");
var message = "The platform is ";

function main(){
   console.log(message + os.platform());
}
main();
*/

/*var express = require("express");
var app = express();

app.get("/google", function(req, res){
   res.redirect('http://google.com');

});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/

/*var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/

var express = require("express");
var app = express();

app.use(express.static("your_project_folder_name"));

app.get("/", function(req, res){
   res.redirect("your_project_html_name");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
