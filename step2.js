const fs=require('fs');
const process=require('process');
const axios = require('axios');

function cat(path)
{
    fs.readFile(path,'utf8', function(err, data){
        if(!err){
            console.log(data);
        }
        else{
            console.error('Error reading ${path}:${err}');
            process.exit(1);
        }
    }
    );
}
cat(process.argv[2]);

async function webCat(url)
{
    try{
        let res=await axios.getAdapter(url);
        console.log(res.data);
    }
    catch(err){
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}
let path = process.argv[2];
if (path.slice(0, 4) === 'http') {
    webCat(path);
  } else {
    cat(path);
  }