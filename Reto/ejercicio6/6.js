const Pass = {
    password1 : document.getElementById ('passwordone'),
    password2 : document.getElementById('passwordtwo')
}

function comparate(){
    let comppassword1 = Pass.password1.value
    let comppassword2 = Pass.password2.value

    if(comppassword1 === comppassword2){
        alert(`Las contraseñas coinciden`)
    }else if (comppassword1 !== comppassword2){
        alert(`Las contraseñas son incorrectas`)
    }
}