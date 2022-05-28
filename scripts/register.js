let f=document.querySelector("form");
let v= [false,false,false,false];
/*f.addEventListener("submit",()=>{
    f.preventDefaulte();
for(let i=0;i<4;i++)
        {
            if(!v[i]){
                f.preventDefaulte();
                console.log(v[i]);
                return false;
            }
        }
        console.log(v);
        f.submit();
        
        return true;
});*/
document.querySelector(".submit").addEventListener("click",validate);

function validate(){
    for(let i=0;i<4;i++)
        {
            if(!v[i]){
                f.preventDefaulte();
                console.log(v[i]);
                return false;
            }
        }
        console.log(v);
        f.submit();
        
        return true;


}

document.querySelectorAll("input").forEach((e)=>{
    
           e.addEventListener('blur',(e)=>{
                if(e.target.classList[0]==='myname'){
                    if(e.target.value<2){
                        v[0]=false;
                        e.target.style.border="1px solid red";
                        document.querySelector(".nameerror").style.display="block";
                        //e.target.focus();
                    }
                    else{
                        v[0]=true;
                        e.target.style.border="1px solid #F3BB61";
                        document.querySelector(".nameerror").style.display="none";
                    }
                }
                else if(e.target.classList[0]==='myEmail'){
                    
                    let patt=/^([a-z]+)([0-9])*@([a-zA-Z]+).[a-z](.[a-z])*$/;
                    let patt2=/^[0-9]+$/
                    if(patt.test(e.target.value)){
                        v[1]=true;
                     console.log("goodemail");
                     document.querySelector(".emailerror").style.display="none";
                     document.querySelector(".invalemailerror").style.display="none";
                     e.target.style.border="1px solid #F3BB61";
                     console.log(localStorage.getItem(e.target.value));

                     if(localStorage.getItem(e.target.value)!==null){
                        v[1]=false;
                        document.querySelector(".emailerror").style.display="none";///for repeated email
                        document.querySelector(".invalemailerror").style.display="block"
                        e.target.style.border="1px solid red";
                        e.target.focus();
                     }
                 }
                 else if(patt2.test(e.target.value)){
                     v[1]=true;
                    document.querySelector(".emailerror").style.display="none";
                    document.querySelector(".invalemailerror").style.display="none";
                    e.target.style.border="1px solid #F3BB61";
                    console.log(localStorage.getItem(e.target.value));

                    if(localStorage.getItem(e.target.value)!==null){
                        v[1]=false;
                        document.querySelector(".emailerror").style.display="none";///for repeated email
                        document.querySelector(".invalemailerror").style.display="block";
                        e.target.style.border="1px solid red";
                        e.target.focus();
                     }
                 }
                 else if(e.target.value.length===0){
                     v[1]=false;
                     document.querySelector(".emailerror").style.display="block";
                     document.querySelector(".invalemailerror").style.display="none";
                     e.target.style.border="1px solid red";
                     e.target.focus();
                 }
                 
                else{
                    v[1]=false;
                    document.querySelector(".invalemailerror").style.display="block";
                    document.querySelector(".emailerror").style.display="none";
                    e.target.style.border="1px solid red";
                    e.target.focus();
                }
         
                

                }
                else if(e.target.classList[0]==='pass'){
                     if(e.target.value.length<6){
                         v[2]=false;
                        document.querySelector(".passerror").style.display="block";
                        e.target.style.border="1px solid red";
                        e.target.focus();
                     }
                     else{
                         v[2]=true;
                        document.querySelector(".passerror").style.display="none";
                        e.target.style.border="1px solid #F3BB61";
                     }

                }
                else if(e.target.classList[0]==='repass'){
                    
                  let rt = document.querySelector('.pass').value;
                  if(e.target.value===rt&&rt!=''){
                      v[3]=true;
                    document.querySelector(".repasserror").style.display="none";
                    e.target.style.border="1px solid #F3BB61";
                  }
                  else{
                      v[3]=false;
                    document.querySelector(".repasserror").style.display="block";
                    e.target.style.border="1px solid red";
                    e.target.focus();
                  }
                }

                   
               
           })
        })