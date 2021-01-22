// Empty JS for your own code to be here
function validasi() {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;
    if (Username!="sausan" && Password !="rafila") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}
// function login(){
//     let uname = document.getElementById("Username")
//     let pass = document.getElementById("Password");

//     console.log("Username : " + uname.Value);
//     console.log("Password : " + pass.Value);
//     if(uname.Value=='nf123'&& pass.value=='nf123'){
//         alert('selamat datang');
//     }else{
//         alert('username atau password salah !!');
//     }

// }