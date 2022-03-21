var fs=require("fs");

console.log("Start reading");

fs.readFile("index.txt", function(err,data){
    if(!err){
        console.log(data.toString)
    }else{
        console.log(err);
    }
})
console.log("read completed");







