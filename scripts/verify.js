let name,email,Pass;
let rtt=location.href.split('&');
let ctt=rtt[1];
ctt=ctt.split('=')[1];
email=ctt.replace("%40","@");
name=rtt[0].split('=')[1].replace('+',' ');
pass=rtt[2].split('=')[1];
console.log(email+" "+ pass+" "+name);
let obj={
    Name:name,
    password:pass,
}
let xc=555;
//sendEmail();

function sendEmail() {
	Email.send({
        Host: "smtp.elasticemail.com", 
        Username: "sudeepdeep340@gmail.com",
        Password: "3485D1722E686EC823D3E6055AE6DC262A33",
        To: email,
        From: "sudeepdeep340@gmail.com",
        Subject: `${name} Just messaged you from the website form`,
        Body: `the Acctivation OTP is ${xc}`,
	}).then(
		message => alert("mail sent successfully")
	);
}

document.querySelector(".submit").addEventListener("click",()=>{
    
    let val=document.querySelector(".myEmail").value;
    if(parseInt(val)===xc){
        localStorage.setItem(email,JSON.stringify(obj));
        console.log(localStorage.getItem(email));
        location.assign("login.html");
    }
    else{
       
    }
});
function valid(){

}