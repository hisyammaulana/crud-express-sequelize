module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // create a new tutorial
  router.post("/", tutorials.create);

  // retrieve all tutorials
  router.get("/", tutorials.findAll);

  // retrieve all pulished
  router.get("/published", tutorials.findAllPublished);

  // retrieve by id
  router.get("/:id", tutorials.findOne);

  // update by id
  router.put("/:id", tutorials.update);

  // delete by id
  router.delete("/:id", tutorials.delete);

  // delete all
  router.delete("/", tutorials.deleteAll);

  app.use("api/tutorials", router);
};
