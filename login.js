function validateForm() {
    var email = document.getElementsByName("email")[0].value.trim();
    var senha = document.getElementsByName("senha")[0].value.trim();
 
    if (email === "") {
        alert("Por favor, preencha o campo de e-mail.");
        return false;
    }
 
    if (senha === "") {
        alert("Por favor, preencha o campo de senha.");
        return false;
    }
 
    return true; }