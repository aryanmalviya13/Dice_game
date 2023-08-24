var random_num = Math.floor(Math.random()*6) + 1;
var random_img = "images/dice"+random_num+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_img);
var random_num2 = Math.floor(Math.random()*6) + 1;
var random_img2 = "images/dice"+random_num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",random_img2);
if(random_num>random_num2)
{
    document.querySelector("h1").innerHTML="🔥🚩🎉 Player-1 Wins !";
}
else if(random_num2>random_num)
{
    document.querySelector("h1").innerHTML="🔥🚩🎉 Player-2 Wins !";
}
else
{
    document.querySelector("h1").innerHTML="🤝 Its a Draw !";
}