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
  var axios = require("axios");
  var data = req.body;
  console.log(req.body);

  var config = {
    method: "post",
    url: "https://api.facturify.com/api/v1/factura",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmZhY3R1cmlmeS5jb21cL2FwaVwvdjFcL2F1dGgiLCJpYXQiOjE2MzI2OTUwMDUsImV4cCI6MTYzMjc4MTQwNSwibmJmIjoxNjMyNjk1MDA1LCJqdGkiOiJjRkRKRzF2aVl2d0ExTkNRIiwic3ViIjo4MzM0NCwicHJ2IjoiMGE1YjkwMDBkMzRhMTM5NjExOGU1NDgzNDJlYzQ0MDE2ZjA4YzMzMSJ9.jooxNPOshcisYmrgdBSf-I5b2CeJG-7a3XNWJNeGikYnkjzp-0u_ew84HutYgt9tD8LxPl2gOAwjN4Kn_Bc9t",
      "Content-Type": "application/json"
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  res.send("solicitud exitosa post");
});

module.exports = router;
