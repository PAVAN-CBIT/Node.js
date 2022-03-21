var operatingsystem=require("os");
console.log(operatingsystem.cpus());
console.log(`Server Started :${operatingsystem.uptime}`);
console.log(`Memory available :${operatingsystem.freemem}`);



