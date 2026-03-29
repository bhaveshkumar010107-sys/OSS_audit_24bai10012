const fs = require('fs');

const content = "Open-source is about freedom and collaboration.";

fs.writeFileSync('manifesto.txt', content);

console.log("Manifesto created");