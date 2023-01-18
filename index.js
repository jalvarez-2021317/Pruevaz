function sumar() {
    let input1 = document.getElementById("valor1").value;
    let input2 = document.getElementById("valor2").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);

    if (isNaN(input1) || isNaN(input2)) {
        alert("Ingresa solo numeros validos");
    } else {
        let sum = input1 + input2;
        console.log(sum);
    }
}

function getclick() {
    console.log(getsuma());
}

