# Tic-Tac-Toe

Tic-tac-toe (American English), noughts and crosses (Commonwealth English), or Xs and Os, is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game with a forced draw assuming best play from both players.


### About this project
Making a Tic-Tac-Toe game is the first project in software engineering immersive course of GA (General Assembly) Sydney.


### How can play this
1. Press the 'Player1 VS. Player2' button.

2. Enter your names and then click the 'Submit' button. (note: there is a random function which show us who is the first player.)

3. Choose one sign, "X" or "O" by clicking on.

4. Enter round numbers you want to play and click the submit button.

5. Start the game by choosing a cell. (note: after any round the, the table is ready for another round.)

6. When the game is finished, it is gonna ask you if you want to play again or not. (note: the signs will not change, but the first player is going to chosen by random function again.)

### Used Library and fonts
* Math Library
* [jQuery](https://jquery.com/)
* [Google fonts](https://fonts.google.com/)

### Through the code


#### <ins>html</ins>

I made three `div`s for each page. In each page, some of the `div`s are hidden for another pages.

#### <ins>JavaScript</ins>

I made two JavaScript files, *DOM(MB).js* and *Gamejs(MB).js*. The DOM(MB) is for working with DOM by using jQuery library and the other one for working like behind the scenes.

* <ins>Gamejs(MB).js</ins> : i made an object named gameObj which can make the matrix shape of three row arrays. there is a function which can choose who is going to be the first player by simple `Math.random()` function. There is one key named memory, which can save the numbers which has been chosen by players. And there is one key named *playingRounds* which deals with the rounds and how to figure out is there any winner or the game has been tied.

* <ins>DOM(MB).js</ins> : At first i made one function which used to render the game. At the second page, i used some jQuery functions like `fadeIn()` `fadeOut` `delay` `clone()` and others to make animations.
