// const a= setTimeout(() => {
//     console.log('jdfdjfdjfsjh');
// }, 3000);
// console.log(a);
// console.log('kenfjnvjrn');
// fetch("")
// .then()
// .then()
function generatepassword(){
var chars = "0123456789";
 var passwordLength = prompt('enter your password length')
 var password = "";
 for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   document.getElementById('password').value=password
}
   