const tambah = (...a)=>{
    return a[0]+a[1];
}
const kurang = (...a)=>{
    return a[0]-a[1];
}
const kali = (...a)=>{
    return a[0]*a[1];
}
const bagi = (...a)=>{
    return a[0]/a[1];
}
const modulus = (...a)=>{
    return a[0]%a[1];
}
const tambahBTN = document.getElementById("tambah");
tambahBTN.addEventListener("click", function(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let result = tambah(n1,n2);
    let hasil = document.getElementById("res");
    hasil.setAttribute("value",result);
    console.log(result);
});
const kurangBTN = document.getElementById("kurang");
kurangBTN.addEventListener("click", function(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let result = kurang(n1,n2);
    let hasil = document.getElementById("res");
    hasil.setAttribute("value",result);
    console.log(result);
});
const kaliBTN = document.getElementById("kali");
kaliBTN.addEventListener("click", function(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let result = kali(n1,n2);
    let hasil = document.getElementById("res");
    hasil.setAttribute("value",result);
    console.log(result);
    
});
const bagiBTN = document.getElementById("bagi");
bagiBTN.addEventListener("click", function(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let result = bagi(n1,n2);
    let hasil = document.getElementById("res");
    hasil.setAttribute("value",result);
    console.log(result);
});
const modulusBTN = document.getElementById("modulus");
modulusBTN.addEventListener("click", function(){
    let n1= parseInt(document.getElementById("num1").value);
    let n2= parseInt(document.getElementById("num2").value);
    let result = modulus(n1,n2);
    let hasil = document.getElementById("res");
    hasil.setAttribute("value",result);
    console.log(result);
});
const clearBTN = document.getElementById("clear");
clearBTN.addEventListener("click", function(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    let hasil = document.getElementById("res");
    hasil.setAttribute("value"," ");
});

