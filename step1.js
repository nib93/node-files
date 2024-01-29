const fs=require('fs');
const process=require('process');

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