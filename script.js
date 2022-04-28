var temp;
var hum;
var dp;
var comfo;

timeout();

function get_temp(){
  temp = parseFloat(0.8*document.getElementById("temp_range").value-20);
}

function get_hum(){
  hum = document.getElementById("hum_range").value;
}

function get_dp(T,RH){
  dp = (243.12*(Math.log(RH/100)+((17.62*T)/(243.12+T))))/(17.62-((Math.log(RH/100))+((17.62*T)/(243.12+T))));
}

function prg_bar(prg){
  var value = parseFloat(25/6*prg-25)
  if(value<=0){
   document.getElementById("bar-temp").style.width = String(0) + "%";
  }
  else {
document.getElementById("bar-temp").style.width = String(value) + "%";
  }
}



function copas() {

  /* Get the text field */
  copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}

function getVal_output() {
  valueof_output = String(document.getElementById('output').value);
}

function Comf(Dew){
    if(Dew >= 25.14){
        document.getElementById("bar-temp").style.backgroundColor = "darkred"
        return "Very uncomfortable";
    }
    else if(Dew < 25.14 && Dew >= 22.01){
        document.getElementById("bar-temp").style.backgroundColor = "red"
        return "Uncomfortable";
    }
    else if(Dew < 22.01 && Dew >= 19.04){
        document.getElementById("bar-temp").style.backgroundColor = "yellow"
        return "Alright";
    }
    else if(Dew < 19.04 && Dew >= 16.06){
        document.getElementById("bar-temp").style.backgroundColor = "green"
        return "Comfortable";
    }
    else if(Dew < 16.06 && Dew >= 7.08){
    	document.getElementById("bar-temp").style.backgroundColor = "skyblue"
        return "Dry";
    }
    else if(Dew < 7.08){
    	document.getElementById("bar-temp").style.backgroundColor = "lightblue"
        return "Too dry";
    }
    else{
        return "Error";
    }
}

function timeout() {
    setTimeout(function () {
      if(typeof temp == "undefined" || typeof hum == "undefined"){
        temp = 20;
        hum = 50;
        dp = 9;
      }
      
      get_dp(temp, hum);
      comfo = Comf(dp);
      prg_bar(dp);
      
      document.getElementById("temp_tag").innerHTML = parseInt(temp);
      document.getElementById("hum_tag").innerHTML = parseInt(hum);
      document.getElementById("dp_tag").innerHTML = parseInt(dp);
      document.getElementById("explain_tag").innerHTML = comfo;
	  
      

        timeout();
    }, 50);
}