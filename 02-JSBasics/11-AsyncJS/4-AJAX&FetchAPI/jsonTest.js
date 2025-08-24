const data = `
{
   "username" : "my_username",
   "password" : "my_password",
   "validation-factors" : {
      "validationFactors" : [
         {
            "name" : "remote_address",
            "value" : "127.0.0.1"
         }
      ]
   }
}`;

const dataParsed = JSON.parse(data);

console.log(dataParsed);
console.log(dataParsed.username);
console.log(dataParsed.password);



const data1 = {
    username: "my_username",
    password: "my_password",
    validationFactors: {
        validationFactors: [
            {
                name: "remote_address",
                  value: "23555454"
            }
        ]
    }
};

const data1Stringified = JSON.stringify(data1);
console.log(data1Stringified);
const data1StringifiedParsed = JSON.parse(data1Stringified);
console.log(data1StringifiedParsed);
console.log(data1StringifiedParsed.validationFactors.validationFactors[0].value);
