let s=document.querySelector('.myEmail');
let v=false;
s.addEventListener("blur",()=>{

    let patt=/^([a-z]+)([0-9])*@([a-zA-Z]+).[a-z](.[a-z])*$/;
    let patt2=/^[0-9]+$/
    if((patt.test(s.value)||patt2.test(s.value))&&localStorage.getItem(s.value)!==null){
     console.log("goodemail");

     console.log(localStorage.getItem(s.value));
     v=true;
     document.querySelector(".emaileer").style.display="none";
     s.style.backgroundColor="white";
 }
 else{
     document.querySelector(".emaileer").style.display="block";
     s.style.backgroundColor="gray";
     v=false;
     s.focus();
 }

});
let f=document.querySelector("form");

document.querySelector(".submit").addEventListener("click",validate);
function validate(){
    if(v){
        f.submit();

    }
    else{
        console.log("Error");
        
    }
}