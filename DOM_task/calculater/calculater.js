function display(newvalue) {
    document.getElementById('input1').value += newvalue;
}

function clearScreen() {
    document.getElementById('input1').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('input1').value);
        document.getElementById('input1').value = result;
    } catch (e) {
        document.getElementById('input1').value = 'Error';
    }
}