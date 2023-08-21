document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = clearForm;

function tempConvert() {
    var c = document.getElementById('cinp').value;
    var f = document.getElementById('finp').value;
    var k = document.getElementById('kinp').value;

    if (c != "") {
        f = (parseFloat(c) * 9) / 5 + 32;
        k = (parseFloat(c) + 273.15);
    }
    else if (f != "") {
        c = ((parseFloat(f) - 32) * 5) / 9;
        k = (parseFloat(f) - 32) * 5 / 9 + 273.15;
    }
    else if (k != "") {
        f = (parseFloat(k) - 273.15) * 9 / 5 + 32;
        c = (parseFloat(k) - 273.15);
    } 
    else {
        alert("Please enter a value to convert");
    }

    document.getElementById('cinp').value = parseFloat(c).toFixed(2);
    document.getElementById('finp').value = parseFloat(f).toFixed(2);
    document.getElementById('kinp').value = parseFloat(k).toFixed(2);
}

function clearForm() {
    document.getElementById('cinp').value = "";
    document.getElementById('finp').value = "";
    document.getElementById('kinp').value = "";
}