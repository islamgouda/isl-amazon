document.querySelector(".sign-in").addEventListener("click",()=>{
    location.assign("login.html")
})
document.querySelector(".sign-up").addEventListener("click",()=>{
    location.assign("register.html")
})
document.querySelector(".back-to-top").addEventListener("click",gototp);
function gototp(){
    window.scrollTo(0,0);
}

var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
        var dataAfterConvert=JSON.parse(xhttp.responseText)
      console.log(dataAfterConvert.location.country.name);
      document.querySelector('.countryg').innerHTML=dataAfterConvert.location.country.name;
    }
};
xhttp.open("GET","https://api.ipregistry.co/?key=tryout",true);
xhttp.send();
