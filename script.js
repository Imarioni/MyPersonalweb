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