function doitien() {
    let giatrivao = document.getElementById('money').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let result;

    if(select1 == select2) {
        result = giatrivao
        document.getElementById('result').innerHTML = 'Result: ' + result;
    }
    if(select1 == "VND" && select2 == "USD") {
        result = giatrivao/23000;
        document.getElementById('result').innerHTML = 'Result: ' + result;

    }
    if(select1 == "USD" && select2 == "VND"){
        result = giatrivao*23000;
        document.getElementById('result').innerHTML = 'Result: ' + result;
    }
}