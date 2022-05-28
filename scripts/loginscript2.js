console.log(location.href.split('=')[1].split('&')[0]);
let y=location.href.split('=')[1].split('&')[0];
let phonePatt=/^[0-9]$/
if(!phonePatt.test(y)){
y=y.replace("%40",'@');
}
let currentUser;
document.querySelector(".m-Email").innerHTML=y;
document.querySelector(".submit").addEventListener("click",login)
function login(){
    let pss =document.querySelector(".myEmail").value;
    currentUser=JSON.parse(localStorage.getItem(y));
    if(currentUser.password===pss){
        console.log("logged");
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        location.assign("c.html");
    }
    else{
        console.log("Notlogged");
        document.querySelector(".emaileer").style.display="block";
    }
    
}