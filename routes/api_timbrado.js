var express = require("express");
var axios = require("axios");
var router = express.Router();
let token = '';
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post('/token', (req, res) => {

  let keys = JSON.stringify({
    "api_key": process.env.API_KEY,
    "api_secret": process.env.API_SECRET
  });
  
  let config1 = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.facturify.com/api/v1/auth',
    headers: { 
      'Content-Type': 'application/json', 
      'cache-control': 'no-cache'
    },
    data : keys
  };
  
  axios.request(config1)
  .then((response) => {
    token = JSON.stringify(response.data.jwt.token);
    console.log(token);
    res.send(token);
  
  })
  .catch((error) => {
    console.log(error);
  });

}); 


router.post("/factura", function (req, res, next) {
  var fact = req.body;
  
  var config2 = {
    method: "post",
    url: "https://api.facturify.com/api/v1/factura",
    headers: {
      Authorization:
        "Bearer " +token,
      "Content-Type": "application/json"
    },
    data: fact
  };

  axios(config2)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.send("solicitud exitosa post");
    })
    .catch(function (error) {
      console.log(error);
    });

});

module.exports = router;
