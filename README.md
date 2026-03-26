<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Personal Website</title>
    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <link rel="stylesheet" type="text/css" href="fancy.css">
</head>
<body>
    <h1>Welcome to my Page</h1>
    <p>Welcome to my personal website. Some of my favorite video games are <strong>College Football 26</strong>, to adventure games like <em>Red Dead Redemption 2.</em></p>
    <p>I usually do not have time to play video games lately but when I do it is College Football 26. It is my favorite game because I can play as the Kansas State Wildcats.</p>
    <p>But when I get bored of playing College Football 26 I play Red Dead Redemption 2. It is easily my favorite Rockstar game; I can spend hours just roaming around the map.</p>
    <p>Those are some of the video games I like to play on my <strong>FREE TIME!</strong> Which is rarely during the semester. But it does make it more enjoyable when I do get to play.</p>
    <p>Get to know more about me <a href="about.html">about me</a> or you can take a look at my <a href="resume.html">resume</a>.
    </p>
    <hr>
    <h2>Tic Tac Toe</h2>
    <p id="status">Player X's Turn</p>
    <div id="board">
        <button class="cell" data-id="0"></button>
        <button class="cell" data-id="1"></button>
        <button class="cell" data-id="2"></button><br>
        <button class="cell" data-id="3"></button>
        <button class="cell" data-id="4"></button>
        <button class="cell" data-id="5"></button><br>
        <button class="cell" data-id="6"></button>
        <button class="cell" data-id="7"></button>
        <button class="cell" data-id="8"></button>
    </div>
    <script src="script.js"></script>
</body>
</html>
2. Updated script.js (The jQuery version)
You must update your script.js file to this code, otherwise, the game won't understand the jQuery commands.

JavaScript
let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';

// This waits for the page to load before starting the script
$(document).ready(function() {
    // This tells the buttons what to do when clicked
    $('.cell').click(function() {
        let index = $(this).data('id');
        if (board[index] === '') {
            board[index] = player;
            $(this).text(player); // This puts the X or O on the button
            checkWin();
            // Switch players
            player = (player === 'X') ? 'O' : 'X';
            $('#status').text("Player " + player + "'s Turn");
        }
    });
    function checkWin() {
        const wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        for (let s of wins) {
            if (board[s[0]] && board[s[0]] === board[s[1]] && board[s[0]] === board[s[2]]) {
                alert("Player " + board[s[0]] + " Wins!");
                location.reload(); 
            }
        }
    }
});
