var express = require("express");

var router = express.Router();


var burger = require("../config/sequelize");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


router.get("/burgers", function(req, res) {
  burger.findAll({}).then(function(data){
    res.json({ burgers: data });
  })
});

router.post("/burgers", function(req, res) {
  console.log(req.body)
  burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(result) {
      console.log(result);
      res.json(result);
    });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);
  burger.update(
    {
      devoured: true
    },
    { 
      where:{id: req.params.id}
    }).then(function(result) {
    console.log(result);
    res.json(result);
  });
 
});


module.exports = router;
