$(document).ready(function(){

    var result = 0;
    var preValue =0;
    var operation =null;
    var currentEntry =0;
    
$("#back").click(function () {
    preValue =$("#input").val();        
    $("#input").val(preValue.slice(0,-1));
})

$("#c").click(function () {
    $("#input").val("");
    $("#input").focus();
})

$("#plus").click(function () {
    preValue=$("#input").val();
    operation = '+';   
    $("#input").val("").focus();
})

$("#substraction").click(function(){
    preValue=$("#input").val();
    operation = '-';   
    $("#input").val("").focus();
})

$("#multiple").click(function(){
    preValue=$("#input").val();
    operation = '*';   
    $("#input").val("").focus();
})

$("#divide").click(function(){
    preValue=$("#input").val();
    operation = '/';   
    $("#input").val("").focus();
})


$("#equal").click(function () {
    currentEntry=$("#input").val();
    if(operation==='+'){             
        result=parseInt(preValue)+parseInt(currentEntry);
        $("#input").val(result);
    }
    else if(operation==='-'){
        result=parseInt(preValue)-parseInt(currentEntry);
        $("#input").val(result);
    }
    else if(operation==='*'){
        result=parseInt(preValue)*parseInt(currentEntry);
        $("#input").val(result);
    }
    else if(operation==='/'){
        result=parseInt(preValue)/parseInt(currentEntry);
        $("#input").val(result);
    }
})

$("#7").on('click',function(){
    let value=7;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#8").on('click',function(){
    let value=8;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#9").on('click',function(){
    let value=9;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#4").on('click',function(){
    let value=4;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#5").on('click',function(){
    let value=5;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#6").on('click',function(){
    let value=6;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#1").on('click',function(){
    let value=1;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#2").on('click',function(){
    let value=2;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#3").on('click',function(){
    let value=3;
    let c=$("#input").val();
    $("#input").val(c + value);
})
$("#dot").on('click',function(){
    
})

})