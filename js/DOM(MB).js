let player1Sign = '';
let player2Sign = '';
let playerSign = '';
let player1 = '';
let player2='';
let player ='';
let iteration = 0;
let result ='';
let roundsNumber = 0;
let swappingSign = '';

// This function is the render for a round when finished.
const render = function(){
  iteration = 0;
  hasChosenArray = [];
  gameObj.cells = ['1','2','3','4','5','6','7','8','9'];
  $('.cell').text('');
  $('.cell').on('click');
}


$(document).ready( function () {
  render();

  // for clicking on the first page button
  $('#VSplayer2').on('click' , function (){
    $('#container1').hide()
    $('#container2').fadeIn(1000);
  });

  // take player1 and player2 name and tell who is the first player
  $('#container2 button').on('click', function(){
    player1 = $('#firstPlayer input').val();
    player2 = $('#secondPlayer input').val();

    // the 'whoIsFirstPlayer' function is in the Gamejs(MB).js
    // it works with the simple Math.random() function.
    let firstAndSecondPlayer = gameObj.whoIsFirstPlayer(player1,player2);
    player1 = firstAndSecondPlayer[0];
    player2 = firstAndSecondPlayer[1];
    player = player1;

    // in the comment <div> it is gonna tell us who is the first player and -
    // each box going to change for the first player and second player -
    // by their name.
    $('#submit').hide();
    $('#comment').text( `First player is ${player1}`)
      .delay(1000).fadeIn(1000, function(){
        $('#container2 input').fadeOut(1000);
        $('#comment').fadeOut(1000,function (){
          $('#firstPlayer h2')
          .html(`First Player<br><br>${player1}`)
          .fadeIn(1000);
          $('#secondPlayer h2')
          .html(`Second Player<br><br> ${player2}`)
          .fadeIn(1000);

          // the <div> with id = 'signChoose' will gonna pop-up
          $(this)
          .text(`${firstAndSecondPlayer[0]}, Choose a sign`)
          .fadeIn(1000,function(){
            $('#signChoose').fadeIn(1000)
          })
        });
      });
    });

  // if the first player choose which sign he/she choose, the sign -
  // will goes to the first player box. the second player sign will attach to -
  // second player box.
  $('.cellDemo').on('click', function(){
    playerSign = $(this).text();

    // the 'secondPlayerSign' is a simple function to give us the second player -
    // sign, instead of writing that in this page.
    let signage = gameObj.secondPlayerSign(playerSign);
    player2Sign = signage;
    player1Sign = playerSign;

    // to attach the sign demoes to each player box.
    $('.name#firstPlayer').css('background-color','#959799');
    $(this).css('background-color','#ccc')
    $(this).clone().appendTo($('.name#firstPlayer')).show(2000);
      let secondPlayerSign = `.cellDemo#${player2Sign}`;
      $(`${secondPlayerSign}`).clone()
      .appendTo($('.name#secondPlayer'))
      .show(2000 ,function(){
        $('#container2').fadeOut(3000 , function(){

          //third page is going to show.
          $('#container3').fadeIn(1000);
          $('#container3 .name').hide();
          $('#container3 #matrix').hide();
        })
      });
    $(this).off('click');
    $(`${secondPlayerSign}`).off('click');
  });

  // This function is going to take the number of rounds that players -
  // wants to play.
  const howManyRounds = function(){
    $('#round button').on('click', function() {
      if $('#round input').val().isEmpty() !== false {


      $('#round').fadeOut(1000, function() {
        roundsNumber = +$('#round input').val();
        $('#container3 .name').fadeIn(1000);
        $('#container3 #matrix').fadeIn(1000);

        // This is the winning counter box, shows the win count for -
        // each player.
        $('#container3 #result1').fadeIn(1000);
        $('#container3 #result2').fadeIn(1000);
        $('#gameComment').text('');
        $('#gameComment').show();
      });
    }
  });
}
  howManyRounds();

  // this function will check is the situation of a game in one round.
  const cellClick = function(){
    $('.cell').on('click' , function(){
      let cellId = $(this).attr('id');
      let playerChoice = cellId[cellId.length-1];
      $(this).text(playerSign);

      // the iteration counter for checking if all the boxes has been chosen -
      // or not.
      iteration += 1;
      // this 'playingRounds' function will check who is the winner of all round.
      // this has been defined in the Gamejs(MB).js.
      let gameContinue = gameObj.playingRounds(playerSign,playerChoice,rounds,iteration);

      // check if one round does not finished and if it is, gonna show the message.
      if (!gameContinue[0]){
        if (gameContinue[1] === "Tie"){
          $(this).text(playerSign);
          $('#gameComment').text('Tie in this round').fadeIn(
            function(){
              $(this).fadeOut(1000,function(){
                render();
              });
            });

        }else if (gameContinue[1] === ""){
          $('#result1').text(gameContinue[2]);
          $('#result2').text(gameContinue[3]);
          $('#gameComment').text(`${player} is the Winner of this round.`)
            .fadeIn(1000, function (){
              $(this).fadeOut(2000,function(){
                render();
              });
            });

        }else{
          $('#result1').text(gameContinue[2]);
          $('#result2').text(gameContinue[3]);
          $('#gameComment').text(gameContinue[1])
            .fadeIn(1000, function (){
              $('#render').fadeIn(1000);
            })
          $('.cell').off('click');
        }
      }
      $(this).off('click');

    });
  }
  cellClick();


  // this lines will render all the game, when all the rounds finished.
  // at the end of the play, it is gonna ask the players if they want to play -
  // again or not. if yes, it will the second player a chance to be the first player -
  // by using the Math.random function again.

  $('#render').on('click', function() {
    render();
    $(this).fadeOut(1000);
    $('#gameComment').hide();

    roundCounter = 0;
    player1Score = 0;
    player2Score = 0;
    roundsNumber = 0;
    swappingSign = '';

    let player1UptoNow = player1;
    let firstAndSecondPlayer = gameObj.whoIsFirstPlayer(player1,player2);
    player1 = firstAndSecondPlayer[0];
    player2 = firstAndSecondPlayer[1];
    player = player1;

    // if the first player changed by the random function, this will change the -
    // first player and the first player sign from what was in the last game.
    if (player !== player1UptoNow){
      swappingSign = player1Sign;
      player1Sign = player2Sign;
      player2Sign = swappingSign;
      $('#result1').attr('id','result');
      $('#result2').attr('id','result1');
      $('#result').attr('id','result2');
    }
    playerSign = player1Sign;

    $('#container3').fadeOut(1000,function(){
      $('#round').fadeIn(1000);
    });
    $('#gameComment').text( `First player is ${player1}`);
    $('#container3').fadeIn(1000);
    $('#container3 .name').fadeOut(1000,function(){
      $('#gameComment').show();
    });

    // going back to the choosing the number of rounds to play.
    $('#container3 #result1').fadeOut(1000);
    $('#container3 #result2').fadeOut(1000);
    $('#container3 #matrix').fadeOut(1000);
    howManyRounds();

    $('.cell').on('click');
    $('#result1').text('0');
    $('#result2').text('0');
    cellClick();
  });

});
