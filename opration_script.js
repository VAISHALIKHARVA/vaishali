function myfun() {
    let x = document.getElementById("int1").value;
    let y = document.getElementById("int2").value;

    let arithmetic_sel = document.getElementById("arithmetic_sel").value;

    let arith_1 = document.getElementById("arith_1").value;
    let arith_2 = document.getElementById("arith_2").value;
    let arith_3 = document.getElementById("arith_3").value;
    let arith_4 = document.getElementById("arith_4").value;

    if (arithmetic_sel == arith_1) {
        var a = parseInt(x) + parseInt(y);
        document.getElementById('demo').innerHTML = a;
    }

    else if(arithmetic_sel == arith_2){
        var a = parseInt(x) - parseInt(y);
        document.getElementById('demo').innerHTML = a;
    }

    else if(arithmetic_sel == arith_3){
        var a = parseInt(x) * parseInt(y);
        document.getElementById('demo').innerHTML = a;
    }

    else{
        var a = parseInt(x) / parseInt(y);
        document.getElementById('demo').innerHTML = a;
    }

}