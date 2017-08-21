const fs = require('fs');

/*
* __dirname pasta atual
*/
const files = fs.readdirSync(__dirname);

files.forEach(f => console.log(f));