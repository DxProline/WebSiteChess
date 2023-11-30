function checkEmail(mailElement) {
    if (mailElement.value.includes ("@")){
        // TRUE
        mailElement.style.border = "2px solid green"
    }else{
        // FALSE
        mailElement.style.border = "2px solid red"
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