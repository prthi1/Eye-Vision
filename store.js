var price1;
var price2;
var price3;
var price4;
var quantityarray =[];
var productarray =[];
var pricearray =[];
var alertmessage =[];

function shopedproduct1(){
    price1=document.getElementById('product1').value*5600;
    window.alert(document.getElementById('product1').value+ " sunglass is added to cart LKR " + price1);
    quantityarray.push(document.getElementById('product1').value);
    productarray.push("sunglass");
    pricearray.push(price1);

}
function shopedproduct2(){
    price2=document.getElementById('product2').value*11000;
    window.alert(document.getElementById('product2').value+ " contact lens is added to cart LKR " + price2);
    quantityarray.push(document.getElementById('product2').value);
    productarray.push("contact lens");
    pricearray.push(price2);

}
function shopedproduct3(){
    price3=document.getElementById('product3').value*32000;
    window.alert(document.getElementById('product3').value+ " Spectacles is added to cart LKR " + price3);
    quantityarray.push(document.getElementById('product3').value);
    productarray.push("Spectacles");
    pricearray.push(price3);

}
function shopedproduct4(){
    price4=document.getElementById('product4').value*45000;
    window.alert(document.getElementById('product4').value+ " Hearing Aids is added to cart LKR " + price4);
    quantityarray.push(document.getElementById('product4').value);
    productarray.push("Hearing Aids");
    pricearray.push(price4);

}

function validateForm(){
    var a = document.forms["MyForm"]["name"].value;
    var b = document.forms["MyForm"]["Card Number"].value;
    var c = document.forms["MyForm"]["Email"].value;
    var d = document.forms["MyForm"]["Card Holder Name"].value;
    var e = document.forms["MyForm"]["Address"].value;
    var f = document.forms["MyForm"]["Exp Month"].value;
    var g = document.forms["MyForm"]["mobile number"].value;
    var h = document.forms["MyForm"]["CVV"].value;


if(a=="") {
    alert("name undefined");
    return false;
}
if(b=="") {
    alert("Card Number undefined");
    return false;
}
if(c=="") {
    alert("Email undefined");
    return false;
}
if(d=="") {
    alert("Card Holder Name undefined");
    return false;
}
if(e=="") {
    alert("Address undefined");
    return false;
}
if(f=="") {
    alert("Exp Month undefined");
    return false;
}
if(g=="") {
    alert("Mobile number undefined");
    return false;
}
if(h=="") {
    alert("CVV undefined");
    return false;
}
var totalprice=0;
var i;
for(i =0; i < productarray.length; i++){
    var tempstr = quantityarray[i] + " x " + productarray[i] + " -LKR " + pricearray[i];
    alertmessage.push(tempstr);
    totalprice += pricearray[i];

}
window.alert(alertmessage.join("\n") + "\n total is " + totalprice.toString() + "\nname:"+ document.getElementById('name').value + "\nEmail:"+ document.getElementById('Email').value + "\nAddress:"+ document.getElementById('Address').value + "\nmobile number:"+ document.getElementById('mobile number').value)
}





