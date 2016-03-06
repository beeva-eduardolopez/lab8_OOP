var dices = document.getElementsByClassName('dice');

var face0 = new Image();
face0.src = "dice1.png";
var face1 = new Image();
face1.src = "dice2.png";
var face2 = new Image();
face2.src = "dice3.png";
var face3 = new Image();
face3.src = "dice4.png";
var face4 = new Image();
face4.src = "dice5.png";
var face5 = new Image();
face5.src = "dice6.png";

var Dice = function (value) {
    this.value = value;
};


function rollDice() {


    for (var index = 0; index < dices.length; index++) {
        // var die = document.getElementById(index);
        var value = Math.floor(Math.random() * 5) + 1;
        document.images["mydice" + index].src = eval("face" + value + ".src");
        // die.innerHTML = value;
    }
}
function createDice() {
    var id = dices.length;
    // var html = '<div class="dice" id="' + id + '"> <img src="dice1.png" name="mydice'+ id + '"> </div>';
    var html = '<div class="dice" id="' + id + '"> <img src="dice1.png" name="mydice'+ id + '"> </div>';
    var diceOOP = new Dice(html);
    document.getElementById("dices-container").innerHTML += diceOOP.value;
   
   
    // var dice = document.createElement('div');
    // dice.className = 'dice';
    // dice.id = dices.length;
    // dice.innerHTML = "<id='" + dice.id + ">0</p>";
    // document.body.appendChild(dice);

}