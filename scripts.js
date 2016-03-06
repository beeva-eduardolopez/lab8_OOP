var dices = document.getElementsByClassName('dice');


var Dice = function (value) {
  this.value = value;
};



function rollDice() {

    for (var index = 0; index < dices.length; index++) {
        var die = document.getElementById(index);
        var value = Math.floor(Math.random() * 6) + 1;
        die.innerHTML = value;
    }
}
function createDice() {
    // var id = dices.length;
    // var html = '<div class="dice" id="'+ id +'">0</div>';
    // var dice = new Dice(html);
    
    var dice = document.createElement('div');
    dice.className = 'dice';
    dice.id = dices.length;
    dice.innerHTML = "<id='" + dice.id + ">0</p>";
    document.body.appendChild(dice);

}