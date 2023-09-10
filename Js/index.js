let pass = document.getElementById("pass");
console.log(pass);
let email=document.getElementById("email")
let img=document.querySelector("img")
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
function rotate()
{
    let b=pass.getAttribute("type","password");
    console.log(b);
        if(b=="password"){
            pass.setAttribute("type","type")
            img.setAttribute("class",img2)
                
        }
        else{
            pass.setAttribute("type","password")
            img.setAttribute("class",img1)
        }
}
btn.onclick=validation;
function validation(){
    let email1 = email.value;
    let pass1 = pass.value;
    localStorage.setItem("email",email1);
    localStorage.setItem("pass",pass1);

}