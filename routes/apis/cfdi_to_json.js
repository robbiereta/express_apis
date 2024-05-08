var express = require("express");
var router = express.Router();

const CfdiToJson = require("cfdi-to-json");

/* GET home page. */
router.get("/", function (req, res, next) {


  var jsonCfdi

var ruta = "./routes/apis/grmfeb24.xml";
// Uso con ruta del XML
try {
  jsonCfdi = CfdiToJson.parse({ path: ruta });
} catch (error) {
  console.log(error);
}




res.send(JSON.stringify(jsonCfdi));

});

router.post("/", function (req, res, next) {
  
});

module.exports = router;
