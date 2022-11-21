function properties()
{
    var inputbox1=document.getElementById("jsip1")
    var inputbox2=document.getElementById("jsip2")
    var user1=inputbox1.value
    var user2=inputbox2.value
    var button=document.getElementById("ip")
    var mark=document.getElementById("mk")
    var noOfDigit=user2.length
    mark.innerHTML=noOfDigit
    if(noOfDigit==10)
    {
        inputbox2.style.borderColor="green"
        button.removeAttribute("disabled")
        button.style.borderColor="green"
    }
    else
    {
        inputbox2.style.borderColor="red"
        button.setAttribute("disabled",true)  
    }
}
function showPassword()
{
    var icon=document.getElementById("i2")
    var inputbox2=document.getElementById("jsip2")
    inputbox2.setAttribute("type","text")
}