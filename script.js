const fs = require('fs');
const dir = ['2016', '2017', '2018','2019', '2020','2021'];
function createJson() {
  let arr = [];
  dir.map((year) => {
    fs.readdir(`${__dirname}/${year}`, function(err, file) {
      arr.push({
        year: year,
        children: [...file]
      });
    })
  })
  setTimeout(() => {
    fs.writeFile(`${__dirname}/file.json`, JSON.stringify(arr), (err, data) => {
      if(err) {
        console.error(err);
        return;
      }
    })
  });
}
createJson()