let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    let expression = display.innerText;
    fetch('/calcular', {
        method: 'POST',
        body: new URLSearchParams({ 'expressao': expression }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.resultado !== undefined) {
            display.innerText = data.resultado;
        } else {
            display.innerText = "Erro";
        }
    });
}
