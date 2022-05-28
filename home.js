// var img_container = document.querySelector("img-container");
// var b_ptn = document.getElementById("pre-ptn");
// var n_ptn = document.getElementById("nxt-ptn");
function back(id)
{
  var img_container = document.getElementById(id);
  img_container.scrollBy(-500,0);
}
function next(id)
{
  var img_container = document.getElementById(id);
  img_container.scrollBy(500,0);
}
function scrol_hover(id)
{
  var t1 = document.getElementById(id);
  t1.style.transition = "1s";
  t1.style.overflowX = "scroll";
}
function scrol_UNhover(id)
{
  var t1 = document.getElementById(id);
  t1.style.transition = "1s";
  t1.style.overflowX = "hidden";
}
