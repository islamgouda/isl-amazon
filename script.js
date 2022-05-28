
try{
    if(localStorage.currentUser!==null){
        let n=JSON.parse(localStorage.currentUser);
        document.querySelector(".account-item").innerHTML='Hello,'+n.Name;
        ////
        //document.querySelector(".logout span").style.display="none";
        document.querySelector(".sin-top ").style.display="none";
        //document.querySelector(".n-sign-button").style.backgroundColor="White";
       // document.querySelector(".sign-out").style.display="";
     // 
    }else{
       // document.querySelector(".sin-top").style.display="none";
      // document.querySelector('.sin-top').style.display="block";
      document.querySelector(".sign-out").style.display="none";
    }
}catch(err){}

let imgArr=['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg'];
let imgIndex=0;
document.querySelector(".arrow-next").addEventListener("click",ff);
function ff(){
    document.querySelector('.carousel-container').style.backgroundImage=`url('${imgArr[imgIndex]}')`;
        console.log(imgArr[imgIndex]);
        imgIndex+=1;
        if(imgIndex>3){
            imgIndex=0;
        }
    }
 document.querySelector(".arrow-prev").addEventListener("click",ffc);
    function ffc(){
        document.querySelector('.carousel-container').style.backgroundImage=`url('${imgArr[imgIndex]}')`;
            console.log(imgArr[imgIndex]);
            imgIndex-=1;
            if(imgIndex<0){
                imgIndex=3;
            }
        }
    document.querySelector(".back-to-top").addEventListener("click",gototp);
    function gototp(){
        window.scrollTo(0,0);
    }
    document.querySelector('.index-chart').addEventListener("click",nextChartPage);
    function nextChartPage(){
        location.assign('indexCart.html');
    }
   function showmusic(){
       document.querySelector('.msidebar').style.display="block";
   }
   function closeNav1(){
    document.querySelector('.msidebar').style.display="none";
   }
    
   try{
    var xhttp= new XMLHttpRequest();
         xhttp.onreadystatechange=function(){
             if(this.readyState==4 && this.status==200)
             {
                 var dataAfterConvert=JSON.parse(xhttp.responseText)
               console.log(dataAfterConvert.location.country.name);
               document.querySelector('.countryg').innerHTML=dataAfterConvert.location.country.name;
               localStorage.setItem("ccountry",dataAfterConvert.location.country.name);
             }
         };
         xhttp.open("GET","https://api.ipregistry.co/?key=tryout",true);
         xhttp.send();
 }
 
 catch(err){
console.log(err.message);
 }
 if(localStorage.getItem("ccountry")!==null){
    document.querySelector('.countryg').innerHTML=localStorage.getItem("ccountry");
 }
 console.log("ccc"+localStorage.getItem("ccountry")); 
    document.querySelector(".n-sign-button").addEventListener("click",()=>{
        location.assign("login.html");
    }) 
  function showwin(){
       document.querySelector(".login-logout-f").style.display="block";
   }
   function donshow(){
    document.querySelector(".login-logout-f").style.display="none";
   }
document.querySelector(".sign-out").addEventListener("click",(e)=>{
e.preventDefault();
localStorage.currentUser=null;
document.querySelector(".account-item").innerHTML='Hello,'+'Sign in';
document.querySelector(".sin-top ").style.display="block";
document.querySelector(".sign-out").style.display="none";
Location.assign("c.html");
});
function signt(){
    location.assign("login.html");
}
    
function gsignin(){
    location.assign("login.html");
}
            
   