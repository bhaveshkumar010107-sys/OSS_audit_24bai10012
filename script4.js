const fs = require('fs');

const data = fs.readFileSync('log.txt', 'utf-8');
const count = (data.match(/error/gi) || []).length;

console.log("Errors found:", count);