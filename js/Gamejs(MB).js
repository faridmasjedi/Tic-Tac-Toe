let hasChosenArray = [];
let player1Score = 0;
let player2Score = 0;
let roundCounter = 0;

// the gameObj is the main object for every functions and matrix.
const gameObj = {

  // all the numbers: this is needed for making matrix and change it by other -
  // functions.
  cells: ['1','2','3','4','5','6','7','8','9'],

  // making the matrix of that.
  matrix: function (){
    return [this.cells.slice(0,3),
            this.cells.slice(3,6),
            this.cells.slice(6,9)];
  },

  // random function for telling who is gonna be the first player.
  whoIsFirstPlayer: function(player1,player2){
    let firstPlayerRandom = Math.random();
    let secondPlayerRandom = Math.random();
    while ( firstPlayerRandom === secondPlayerRandom ) {
      secondPlayerRandom = Math.random();
    }
    let first = player1;
    let second = player2;
    if ( firstPlayerRandom > secondPlayerRandom ) {
      first = player2;
      second = player1;
    }
    return [first,second];
  },

  // simple function for determining what is the secon player sign is.
  secondPlayerSign: function (player1Sign){
    let player2Sign = 'O';
    if (player1Sign === "O"){
      player2Sign = "X";
    }
    return player2Sign
  },

  // this key function is saving chosen boxes by players and change the matrix.
  memory: function (playerChoice,playerSign) {
    hasChosenArray.push(playerChoice);
    numberChoosen =  +playerChoice -1;
    this.cells[numberChoosen] = playerSign;
  },

  // this array will gonna check all the rows, columns and diameters.
  // *note: instead of number 3, if we pass argument like n to the -
  // function, and using that in the for loops, we will have all the -
  // win possibilities for custimized matix. (note: we need to change -
  // number 2 in secondDiameter parameter to n-1);
  checkingArray: function(){
    let matrix = this.matrix();
    let firstDiameter = '';
    let secondDiameter = '';
    let joinArray = [];

    for (i=0; i<3; i++){
      firstDiameter = firstDiameter + matrix[i][i];
      secondDiameter = secondDiameter + matrix[i][2-i];
    }
    for (i=0; i<3; i++){
      let rowJoin = '';
      let colJoin = '';

      for (j=0; j<3; j++){
        rowJoin = rowJoin + matrix[i][j];
        colJoin = colJoin + matrix[j][i];
      }
      joinArray.push(rowJoin,colJoin);
    }
    joinArray.push(firstDiameter,secondDiameter)

    return joinArray;
  },

  // this will go through the checking array output and check if there any -
  // winner or not.
  // *note: for custimized matrix, we can change 'XXX' and 'OOO' to 'X'.repeat(n) -
  // 'O'.repeat(n)
  isWinner: function (){
    let checkingForWinArray = this.checkingArray();
    let winner = false;
    if (checkingForWinArray.includes('XXX') || (checkingForWinArray.includes('OOO'))){
      winner = true;
    }
    return winner;
  },

  // this will gonna change the matrix to what players has been chosen,
  // and check if there is a winner or not.
  checkForWinner: function (playersign,playerChoice){
    let firstChecking = this.memory(playerChoice,playersign);
    let isWinner = this.isWinner();
    return isWinner;
  },

  // this function is checking all rounds and each rounds for winner or tied
  // situation. the first element of toPrintOut shows if one round finished or
  // not and the second element, will tell us is there any winner for all rounds -
  // or not. the third and forth elements are each player score.
  playingRounds : function (playersign,playerChoice,rounds,iteration){
    let result = true;
    let toPrintOut = '';
    let winnerCheck = this.checkForWinner(playersign,playerChoice);

     if (!winnerCheck && iteration !== 9){
       if (playerSign === player1Sign){
         player = player2;
         playerSign = player2Sign;
       }else{
         player = player1;
         playerSign = player1Sign;
       }
     }else{
       roundCounter += 1;
       result = false;
       if (winnerCheck){
         if (player === player1) {
           player1Score += 1;
         }else{
           player2Score += 1;
         }
       }

       if ( roundCounter === roundsNumber ) {
         if (player1Score > player2Score){
           toPrintOut = `${player1} Won the game.`;
         }else if (player2Score > player1Score){
           toPrintOut = `${player2} Won the game.`;
         }else{
           toPrintOut = 'Tied game';
         }
       }else if (iteration === 9) {
         toPrintOut = 'Tie';
       }
     }

     return [result,toPrintOut,player1Score,player2Score];
   }
 }
