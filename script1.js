const os = require('os');
console.log("System Report");
console.log("User:", os.userInfo().username);
console.log("OS:", os.platform());
console.log("Uptime:", os.uptime());