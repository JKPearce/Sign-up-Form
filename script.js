const password = document.querySelectorAll('.pwd');

password.forEach(pwd => pwd.addEventListener('input', testInput));

const errorMsg = document.createElement('p');
errorMsg.classList.add('error-msg');
errorMsg.innerText = "The passwords do not match";


function testInput(){
    console.log(password[0].value);
    if(password[0].value !== password[1].value){
        //if(password[0].contains(errorMsg)) return;
        password[0].appendChild(errorMsg);
        password[0].classList.add("error");
    }else{
        if(password[0].classList.contains("error")){
            password[0].classList.remove("error");
            
        }
    }
}