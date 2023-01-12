function calculate(){
    var a = parseInt(document.getElementById('math').value);
    var b = parseInt(document.getElementById('eng').value);
    var c = parseInt(document.getElementById('hindi').value);
    var d = parseInt(document.getElementById('science').value);
    var e = parseInt(document.getElementById('sst').value);
    
    if(a > 100 || b > 100 || c > 100 || d > 100 || e > 100){
    alert('Please Enter Valid Data');
    }
    else{
        var totalmarks = a+b+c+d+e;
        document.getElementById('tm').innerHTML = totalmarks;

        var percentage = totalmarks/5;
        document.getElementById('per').innerHTML = percentage;  
    }
    if(a > 33 && b > 33 && c > 33 && d > 33 && e > 33){
        document.getElementById('qual').innerHTML = "Pass";   
    }
    else{
        document.getElementById('qual').innerHTML = "Fail";  
    }
    if(percentage > 90){
        document.getElementById('gd').innerHTML = "A";  
    }
    else if(percentage > 80){
        document.getElementById('gd').innerHTML = "B";
    }
    else if(percentage > 70){
        document.getElementById('gd').innerHTML = "C";
    }
    else if(percentage > 60){
        document.getElementById('gd').innerHTML = "D";
    }
    else if(percentage > 50){
        document.getElementById('gd').innerHTML = "E";
    }
    else{
        document.getElementById('gd').innerHTML = "F";
    }
    
}