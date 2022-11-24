const fs =require('fs')

function p(url){
    return new Promise(function(resolve,reject){
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

p('../fontsize/万磁王.md').then(res=>{
    return console.log(res.toString());
})
.then(()=>{
    
    p('../fontsize/刘伍兹.md').then(res=>{
        console.log(res.toString());
    })
})
.then(()=>{
    p('../fontsize/刘踢贼.md').then(res=>{
        console.log(res.toString());
    })
})


