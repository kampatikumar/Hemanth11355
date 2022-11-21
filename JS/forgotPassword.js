function forgotPass()
{
    var inputa=document.getElementById("input1")
    var inputb=document.getElementById("input2")
    var usera=inputa.value
    var userb=inputb.value
    var userc=document.getElementById("mk1")
    var userd=document.getElementById("mk2")
    var noOfDigit1=usera.length
    var noOfDigit2=userb.length
    var button1=document.getElementById("btn")
    userc.innerHTML=noOfDigit1
    userd.innerHTML=noOfDigit2
    if(noOfDigit1==10)
    {
        inputa.style.borderColor="green"
        button1.removeAttribute("disabled")
    }
    else
    {
        inputa.style.borderColor="red"
        button1.setAttribute("disabled",true)  
    }
    if(noOfDigit2==10)
    {
        inputb.style.borderColor="green"
        button1.removeAttribute("disabled")
    }
    else
    {
        inputb.style.borderColor="red"
        button1.setAttribute("disabled",true)  
    }
    if(usera==userb)
    {
        button1.style.backgroundColor="green"
    }
    else
    {
        button1.setAttribute("disabled",true)
        inputb.style.borderColor="red"
    }
}
function showPassword1()
{
    var icon1=document.getElementById("i22")
    var inputa=document.getElementById("input1")
    inputa.setAttribute("type","text")
}
function showPassword2()
{
    var icon2=document.getElementById("i23")
    var inputb=document.getElementById("input2")
    inputb.setAttribute("type","text")
}