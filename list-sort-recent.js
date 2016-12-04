const fs = require('fs')
const yaml = require('js-yaml')

let path = 'userdata'

try {
  // list files in userdata > load files and convert to json > sort, filter, and log player data
  let result = fs.readdirSync(path)
    .map(filename => yaml.safeLoad(fs.readFileSync(`${path}/${filename}`, 'utf8')) )
  console.log(result)
} catch (e) {
  console.log(e)
}
