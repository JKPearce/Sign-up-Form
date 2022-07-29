const password = document.querySelectorAll('.pwd');

password.forEach(pwd => pwd.addEventListener('focusout', testInput));

const errorMsg = document.querySelector('.password-error');



function testInput(){
    if(password[0].value !== password[1].value){
        if(password[0].contains(errorMsg)) return;
        errorMsg.style.display = "inline";
        password[0].classList.add("error");
    }else{
        if(password[0].classList.contains("error")){
            password[0].classList.remove("error");
            errorMsg.style.display = "none";
        }
    }
}