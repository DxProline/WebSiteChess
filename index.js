function checkEmail(mailElement) {
    if (mailElement.value.includes ("@")){
        // TRUE
        mailElement.style.border = "2px solid green"
        disableMessageEmailProblem();
    }else{
        // FALSE
        mailElement.style.border = "2px solid red"
        showMessageEmailProblem();
        }
    

}
function checkNumber(numberElement) {
    if (numberElement.value.match(/^\d{9}$/)) {
        // TRUE
        numberElement.style.border = "2px solid green";

    } else {
        // FALSE
        numberElement.style.border = "2px solid red";
    
    }
}

function showMessageEmailProblem() {
    let pElement = document.createElement('p');
    pElement.classList.add("red");
    pElement.innerText = "V e-mailu chybí zavináč!"

    if(!document.querySelector("p.red")){
        const formElement = document.querySelector("form")
        formElement.insertAdjacentElement("afterend",pElement);
    }

}

function disableMessageEmailProblem(){
    if(document.querySelector("p.red")){
        document.querySelector("p.red").remove();
    }
}