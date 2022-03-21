var fs=require("fs");

console.log("Start reading");
var data=fs.readFileSync("index.txt");
console.log(data.toString());
console.log("read completed");







