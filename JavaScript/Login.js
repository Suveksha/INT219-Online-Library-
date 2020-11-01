
function myFunc()
{
    var fName=document.getElementById("fName").value;
    var lName=document.getElementById("lName").value;
    var mailId=document.getElementById("mail").value;
    //Regex values
    var upCase=/[A-Z]/g;
    var lCase=/[a-z]/g;
    var no=/[0-9]/g;
    var sym=/[^A-Za-z0-9]/g;//can be improved by decreasing the range and being mire specific
    var m_Id=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var nVal1=/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    //Checking values at console
    console.log(fName);
    console.log(lName);
    console.log(mailId);
    console.log(pass1.value);//password value can only be accessed by.value func at the time of need
    console.log(pass2.value);
    console.log(pass1.value.length);
    //Functionalities of password field
    if(pass1.value==pass2.value && pass1.value.length>=8)
    {
    if(upCase.test(pass1.value)==false)
    document.getElementById("msg").innerHTML="The Password must contain atleast one UpperCase letter.";
    else if(lCase.test(pass1.value)==false)
    document.getElementById("msg").innerHTML="The Password must contain atleast one LowerCase letter.";
    else if(no.test(pass1.value)==false)
    document.getElementById("msg").innerHTML="The Password must contain atleast one Numeric value.";
    else if(sym.test(pass1.value)==false)
    document.getElementById("msg").innerHTML="The Password must contain atleast one Special charecter.";
    else
    {
    console.log("Password Valid");
    document.getElementById("pass2").style.border="1px solid green";
    document.getElementById("pass1").style.border="1px solid green";
    document.getElementById("msg").innerHTML="Valid Password";
    }
    }
    else
    {
    console.log("Invalid Password");
    document.getElementById("pass1").style.border="1px solid red";
    document.getElementById("pass2").style.border="1px solid red";
    document.getElementById("msg").innerHTML="Invalid Password";
    }
    //Email Validation
    if(m_Id.test(mailId)==false)
    {
    document.getElementById("eid").innerHTML="Invalid Email Address";
    document.getElementById("mail").style.border="1px solid red";
    }
    else
    document.getElementById("mail").style.border="1px solid green";
   
}

function checkPass()
{
    p1=document.getElementById("pass1");
    p2=document.getElementById("pass2");
    if(p1.type=="password"&&p2.type=="password")
    {
        p1.type="text";
        p2.type="text";
    }
    else
    {
        p1.type="password";
        p2.type="password";
    }
}
