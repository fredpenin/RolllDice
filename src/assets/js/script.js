////////////////////////////////////////////////////////////
function randomNumber(range) {
    return Math.round( Math.random() * range );
  }
  
////////////////////Fonctions page 1///////////////////////

// --- d4 --- //
function d4Roll(){
  var d4Result = Math.floor(Math.random()*4+1);
  document.getElementById('display').innerHTML = d4Result;
}

// --- d6 --- //
function d6Roll(){
  var d6Result = Math.floor(Math.random()*6+1);
  document.getElementById('display').innerHTML = d6Result;
}

// --- d8 --- //
function d8Roll(){
  var d8Result = Math.floor(Math.random()*8+1);
  document.getElementById('display').innerHTML = d8Result;
}

// --- d10 --- //
function d10Roll(){
  var d10Result = Math.floor(Math.random()*10+1);
  document.getElementById('display').innerHTML = d10Result;
}

// --- d12 --- //
function d12Roll(){
  var d12Result = Math.floor(Math.random()*12+1);
  document.getElementById('display').innerHTML = d12Result;
}

// --- d20 --- //
function d20Roll(){
  var d20Result = Math.floor(Math.random()*20+1);
  document.getElementById('display').innerHTML = d20Result;
}

// --- d100 --- //
function d100Roll(){
  var d100Result = Math.floor(Math.random()*100+1);
  document.getElementById('display').innerHTML = d100Result;
}

////////////////////////////////////////////////////////////
////////////////Fonction page 2 : pool de dés///////////////
// if (this.acceleration.x.value() > 1 || this.acceleration.y > 1){
      
  function diceRoll() {  
    // récup du nb de chaque dé sélectionné
    var nbD4 = document.getElementById('txtNbD4').value;
    var nbD6 = document.getElementById('txtNbD6').value;
    var nbD8 = document.getElementById('txtNbD8').value;
    var nbD10 = document.getElementById('txtNbD10').value;
    var nbD12 = document.getElementById('txtNbD12').value;
    var nbD20 = document.getElementById('txtNbD20').value;
    var nbD100 = document.getElementById('txtNbD100').value;
    var results = 0;
    
    // les D4
    for (var i = 0; i < nbD4; i++) {
      results += (Math.floor(Math.random() * 4 + 1));
    }

    // les D6
    for (var j = 0; j < nbD6; j++) {
      results += (Math.floor(Math.random() * 6 + 1));
    }

    // les D8
    for (var k = 0; k < nbD8; k++) {
      results += (Math.floor(Math.random() * 8 + 1));
    }

    // les D10
    for (var l = 0; l < nbD10; l++) {
      results += (Math.floor(Math.random() * 10 + 1));
    }

    // les D12
    for (var m = 0; m < nbD12; m++) {
      results += (Math.floor(Math.random() * 12 + 1));
    }    

    // les D20
    for (var n = 0; n < nbD20; n++) {
      results += (Math.floor(Math.random() * 20 + 1));
    }

    // les D100
    for (var o = 0; o < nbD100; o++) {
      results += (Math.floor(Math.random() * 100 + 1));
    }    

    document.getElementById('displ').innerHTML = results;
  }

// }

/////////////////////////////////////////////////////
