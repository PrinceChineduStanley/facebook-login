const emailbox =document.getElementById("emailbox")
console.log(emailbox)

const passwordlogin =document.getElementById("passwordlogin")



const users= [
    {
        Email:"Peter@gmail.com",
        password: "Peter1"
    },

    {
        Email:"Okey@gmail.com",
        password: "Okey1"
    },

]

function loginbutton(){
let email = emailbox.value
let password= passwordlogin.value

for (let i =0; i<users.length; i++){
    if (email==users[i].Email && password==users[i].password){
        alert ("Login Successful")
    }

    else{
        alert ("Login Failed")
    }
}
}





