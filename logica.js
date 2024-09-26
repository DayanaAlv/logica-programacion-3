function calculaFactorial (){
    const numeroF= document.getElementById('inumber'). value;
    const numeroEntero = parseInt(numeroF);

    if (isNaN(numeroEntero)) {
        document.getElementById('resultado').innerHTML = 'Debes de ingresar un numero';
        return;
    } else if (numeroEntero < 0) {
        document.getElementById('resultado').innerHTML = 'Por favor ingrese un número válido';
        return;
    }

    let factorial = 1
    for (let i = 1; i <= numeroEntero; i++){
        factorial *=i;
    }

document.getElementById('resultado').innerHTML= `El factorial de ${numeroEntero} es ${factorial}`

}