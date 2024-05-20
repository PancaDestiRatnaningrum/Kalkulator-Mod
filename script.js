function checkDivisibility() {
    const dividend = document.getElementById('dividend').value;
    const divisor = document.getElementById('divisor').value;
    const resultElement = document.getElementById('divisibilityResult');

    if (dividend === "" || divisor === "") {
        resultElement.textContent = "Mohon masukkan kedua bilangan.";
        return;
    }

    const a = parseInt(dividend);
    const b = parseInt(divisor);

    if (a % b === 0) {
        resultElement.textContent = `${a} habis dibagi oleh ${b}.`;
    } else {
        resultElement.textContent = `${a} tidak habis dibagi oleh ${b}.`;
    }
}

function calculateModulus() {
    const number = document.getElementById('number').value;
    const modulus = document.getElementById('modulus').value;
    const resultElement = document.getElementById('modulusResult');

    if (number === "" || modulus === "") {
        resultElement.textContent = "Mohon masukkan bilangan dan modulus.";
        return;
    }

    const a = parseInt(number);
    const n = parseInt(modulus);

    const result = a % n;
    resultElement.textContent = `${a} ≡ ${result} (mod ${n})`;
}
