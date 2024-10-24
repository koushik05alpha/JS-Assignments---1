// This function working for addition of the input two values
function doAdditions() {
    let a1 = Number(document.getElementById('input-one').value);
    let b1 = Number(document.getElementById('input-two').value);

    let addition = a1 + b1;
    console.log(addition);

    // Display the result in the output element
    let output = document.getElementById('output-one');
    output.innerText = addition;
}

function resetAdditions() {
    // Reset input
    document.getElementById('input-one').value = '';
    document.getElementById('input-two').value = '';

    // Reset output
    let output = document.getElementById('output-one');
    output.innerText = 0;
}



// This function working for Subtraction of the input two values
function doSubtraction() {
    let a1 = Number(document.getElementById('input-three').value);
    let b1 = Number(document.getElementById('input-four').value);

    let Subtraction = a1 - b1;
    console.log(Subtraction);

    // Display the result in the output element
    let output = document.getElementById('output-two');
    output.innerText = Subtraction;
}

function resetSubtraction() {
    // Reset the input fields
    document.getElementById('input-three').value = '';
    document.getElementById('input-four').value = '';

    // Reset output
    let output = document.getElementById('output-two');
    output.innerText = 0;
}



// This function working for Multiplication of the input two values
function doMultiplication() {
    let a1 = Number(document.getElementById('input-five').value);
    let b1 = Number(document.getElementById('input-six').value);

    let Multiplication = a1 * b1;
    console.log(Multiplication);

    // Display the result in the output element
    let output = document.getElementById('output-three');
    output.innerText = Multiplication;
}

function resetMultiplication() {
    // Reset the input fields
    document.getElementById('input-five').value = '';
    document.getElementById('input-six').value = '';

    // Reset output
    let output = document.getElementById('output-three');
    output.innerText = 0;

}


// This function working for Division of the input two values
function doDivision() {
    let a1 = Number(document.getElementById('input-saven').value);
    let b1 = Number(document.getElementById('input-eight').value);

    let Division = a1 / b1;
    console.log(Division);

    // Display the result in the output element
    let output = document.getElementById('output-four');
    output.innerText = Division;
}

function resetDivision() {
    // Reset the input fields
    document.getElementById('input-saven').value = '';
    document.getElementById('input-eight').value = '';

    // Reset output
    let output = document.getElementById('output-four');
    output.innerText = 0;

}




