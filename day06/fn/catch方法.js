const fs =require('fs')

function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getAgent(){
    return new Promise(function(resolve,reject){
        fs.readFile('',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

getPeach().then(res=>{
    console.log(res,'58');
}).catch(err=>{
    console.log(err,'60');
})
.then((data)=>{
    let result = getTroops().then(res=>res.toString())
    console.log(result,'64');
}).catch(err=>{
    console.log(err,'66');
})
.then((data1)=>{
    console.log(data1);
    getAgent().then(res=>{
        console.log(res.toString(),'71');
    })
}).catch(err=>{
    console.log(err,'63');
})