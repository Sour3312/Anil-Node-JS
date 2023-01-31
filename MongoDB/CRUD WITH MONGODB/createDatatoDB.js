// *INSERT DB DATA WITH NODE JS*

const DBconnect = require("./connection");

const insertData = async () => {
  const data = await DBconnect();
  const result = await data.insertMany([
    { name: "sourab", age: 53663453 },
    { name: "amit", age: 423 },
    { name: "mota", age: 746653663453 },
    { name: "sourab", age: 53663453 },
    { name: "amit", age: 423 },
    { name: "mota", age: 746653663453 },
  ]);
  console.log(result);
};

insertData();
