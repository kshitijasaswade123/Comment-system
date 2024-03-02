const route = require("express").Router();
const {
  getdata,
  postData,
  putData,
  deleteData,
} = require("../Controller/Comment_Controller");

route.get("/", getdata); 
route.post("/", postData);
route.put("/:id", putData);
route.delete("/:id", deleteData);

module.exports = route;