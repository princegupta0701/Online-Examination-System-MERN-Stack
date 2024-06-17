var UserModel = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;


//create admin
var createadmin = ()=>{
    bcrypt.hash("admin", saltRounds).then((hash)=>{
        var tempdata = new UserModel({
            name : 'Prince',
            password : hash,
            emailid : 'admin@test.com',
            contact : '8822629773',
            type: 'ADMIN',
        })
        tempdata.save().then(()=>{
            console.log('\x1b[36m',"Admin User Data Is successfully created")
        }).catch((err)=>{
            console.log("err1",err);
        })
    }).catch((err)=>{
        console.log("err2",err)
    })
}



 var hashPassword = (password)=>{
    return (new Promise((resolve,reject)=>{
        bcrypt.hash(password, saltRounds).then(function(hash) {
            resolve(hash);
        }).catch((err)=>{
            reject(err);
        })
    }))
}

module.exports={ createadmin, hashPassword }