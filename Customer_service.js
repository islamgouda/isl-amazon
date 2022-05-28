function ShadowBox(id)
{
    var divBox = document.querySelector('.'+id); //document.getElementById(id);
    divBox.style.borderColor = '#719ECE';
    divBox.style.boxShadow = '0 0 10px #719ece';
}
function RemoveShadowBox(id)
{
    var divBox = document.getElementById(id);
    divBox.style.borderColor = 'black';
    divBox.style.boxShadow = 'none';
}


//////////////////////////////////////////////
var Btns = document.getElementsByClassName("R_Btn");
var Divs = document.getElementsByClassName("div_arr");

console.log(Divs);
function btn_focus(BtnNum,DivID)
{
    Btns[BtnNum].style.backgroundColor = '#007185';
    Btns[BtnNum].style.color = 'white';
    Btns[BtnNum].style.border ='1px solid #007185';

    for (const y of Divs) {
        if(y != Divs[BtnNum])
        {
            y.style.display = "none";
        } 
        else{
            y.style.display = 'block';
        }
    }

    for (const x of Btns) {
        if(x != Btns[BtnNum])
        {
            x.style.backgroundColor = '#f7fafa';
            x.style.color = 'black';
            x.style.border ='none';
        } 
    }
}