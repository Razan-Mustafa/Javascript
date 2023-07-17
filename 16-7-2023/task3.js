function Razan(){
    let Firstname=document.getElementById("Fname").value;
    let Lirstname=document.getElementById("Lname").value;
    let Bdate = document.getElementById("Bdate").value;
    let Email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("ConfirmEmail").value;
    let password = document.getElementById("Password").value;
    let confirmpassword = document.getElementById("ConfirmPassword").value;


    let Fncheck=/\b([A-Z][-,a-z. ']+[ ]*)+/;
    let Lncheck=/\b([A-Z][-,a-z. ']+[ ]*)+/;
    let Bdatecheck = /^[0-9]{1,2}[-]{1}[0-9]{1,2}[-]{1}[0-9]{4}$/;
    let Emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


    if(Fncheck.test(Firstname)){
        document.getElementById("Fnamet").innerHTML="is valied";}
        else{
        document.getElementById("Fnamet").innerHTML="the First name is not vailed should start with(A-Z) and continue _ . end with #";
        return false;
        };

            if(Lncheck.test(Lirstname)){
            document.getElementById("Lnamet").innerHTML=" Lname is valied";}
            else{
            document.getElementById("Lnamet").innerHTML=" The Last name is not vailed should start with(A-Z) and continue _ . end with #";
            return false;
            };
        
        
        
            if (Bdatecheck.test(Bdate)) {
                document.getElementById("Bdatet").innerHTML = "Date is valid.";
            } else {
                document.getElementById("Bdatet").innerHTML = "The date is not valid. Please use the format dd-mm-yyyy.";
                return false;
            }
        
        
            if (Emailcheck.test(Email)) {
                document.getElementById("emailt").innerHTML = "Email is valid.";
            } else {
                document.getElementById("emailt").innerHTML = "example@gmail.com";

                return false;
            }
        
        
        
        
            if (confirmEmail.match(Email) ){
                document.getElementById("ConfirmEmailt").innerHTML = "Email is confirmed.";
            } else {
                document.getElementById("ConfirmEmailt").innerHTML = "Email is not confirmed. Please re-enter.";
                return false;
            }
        
            if (passcheck.test(password)) {
                document.getElementById("Passwordt").innerHTML = "Date is valid.";
            } else {
                document.getElementById("Passwordt").innerHTML = "The date is not valid. Please use the format dd-mm-yyyy.";
                return false;
            }


            if (confirmpassword.match(password) ){
                document.getElementById("ConfirmPasswordt").innerHTML = "Email is confirmed.";
            } else {
                document.getElementById("ConfirmPasswordt").innerHTML = "Email is not confirmed. Please re-enter.";
                return false;
            }
            
            
            
        



}