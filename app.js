var express = require("express")
var app = express();
app.use(express.static('publics'));

app.set("view engine", "ejs");
app.set("views", "./views");

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("App is running on port " + port);
});
app.get("/", function (req, res) {
    res.render("index")
})
// app.get("/app-ads.txt",function(req,res){
//     res.render("app-ads.txt")
// })
// app.get('/ads.txt', (req, res) => {
//     const filePath = join(__dirname, 'static/app-ads.txt')
//     app.serveStatic(req, res, filePath)
// })

// app.get('*', (req, res) => handle(req, res))




// var ExcelToJSON = function () {

//     this.parseExcel = function (file) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             var data = e.target.result;
//             var workbook = XLSX.read(data, {
//                 type: 'binary'
//             });
//             workbook.SheetNames.forEach(function (sheetName) {
//                 // Here is your object
//                 var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//                 var json_object = JSON.stringify(XL_row_object);
//                 console.log(JSON.parse(json_object));
//                 jQuery('#xlx_json').val(json_object);
//             })
//         };

//         reader.onerror = function (ex) {
//             console.log(ex);
//         };

//         reader.readAsBinaryString(file);
//     };
// };


// // var files = evt.target.files; // FileList object
// var files = "./robots.txt"; // FileList object

// var xl2json = new ExcelToJSON();
// xl2json.parseExcel(files[0]);
