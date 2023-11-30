function checkEmail(mailElement) {
    if (mailElement.value.includes ("@")){
        // TRUE
        mailElement.style.border = "2px solid green"
    }else{
        // FALSE
        mailElement.style.border = "2px solid red"
        }
    

}