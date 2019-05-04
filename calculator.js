var total = [];

function klik1(){
    var row1 = document.getElementById("TD1").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik2(){
    var row1 = document.getElementById("TD2").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik3(){
    var row1 = document.getElementById("TD3").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik4(){
    var row1 = document.getElementById("TD4").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik5(){
    var row1 = document.getElementById("TD5").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik6(){
    var row1 = document.getElementById("TD6").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik7(){
    var row1 = document.getElementById("TD7").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik8(){
    var row1 = document.getElementById("TD8").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik9(){
    var row1 = document.getElementById("TD9").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function klik0(){
    var row1 = document.getElementById("TD0").innerText;
    console.log(row1)
    document.getElementById("h1").innerHTML += row1;
    total.push(row1)
}
function bagi(){
    var bagi = document.getElementById("TH/").innerText
    console.log(bagi)
}
function kali(){
    var kali = document.getElementById("TDx").innerText
    kali = "*"
    console.log(kali)
}

function samaDengan(){
    var hasil = 0;
    for(var i = 0; i<total.length ; i++){
        hasil += Number(total[i]);
    }
    document.getElementById("h1").innerHTML = hasil
    console.log(hasil)

}