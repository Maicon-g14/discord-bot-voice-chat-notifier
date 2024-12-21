//listener que escuta requisicoes e aplica no seu json
let fs = require('fs')

const defaultFilePath = '..\\data\\user-config.json'

let userData = JSON.parse(fs.readFileSync(defaultFilePath));

