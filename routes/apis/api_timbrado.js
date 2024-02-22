var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


router.post("/factura", function (req, res, next) {
  var axios = require("axios");
  function getToken() {  
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
    console.log(JSON.stringify(response.data));
    var token = response.data.jwt.token
    return token
  })
  .catch((error) => {
    console.log(error);
  });
  
};
  var fact = req.body;
  console.log(fact);
 getToken().then((token) => {
  var config = {
    method: "post",
    url: "https://api.facturify.com/api/v1/factura",
    headers: {
      Authorization:
        "Bearer " +token,
      "Content-Type": "application/json"
    },
    data: fact
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
});

module.exports = router;
