var request = require('request');
const bcrypt= require('bcryptjs');
var headers = {
    'Content-Type':     'application/json'
};
console.log("Escribe tu email");
var stdin = process.openStdin();
var email;
stdin.addListener("data", function(d) {
    email=d.toString().length;
    console.log(email);
    //console.log("Escribe tu contraseña");
    var stdin1 = process.openStdin();
    stdin1.addListener("data",data=>{
        var password=data.toString().trim();
        var options = {
            url     : `http://localhost:3002/users/mianduranoc@ittepic.edu.mx`,
            method  : 'GET',
            jar     : true,
            headers : headers
        };
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                //console.log(password);
                /*if(bcrypt.compareSync(password,body.detail.password)){
                    console.log("Contraseña Correcta");
                }
                else{
                    console.log("Contraseña Incorrecta");
                }*/
                //jprocess.exit(0);
            }
            else{
                console.log(error);
            }
        });
    })
});
