<!DOCTYPE html>
<html lang = "en">
<head>
  <meta chartset = "UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> My Personal Website</title>
  <link rel="stylesheet" type ="text/css" herf="fancy.css"
  <style>
      .game-container {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            border-top: 2px solid #ccc;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 5px;
            justify-content: center;
            margin: 20px auto;
        }
        .cell {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border: 2px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-family: Arial, sans-serif;
            cursor: pointer;
        }
        .cell:hover {
            background-color: #f0f0f0;
        }
        #restartButton {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body
  <h1>Wlecome to my Portfolio</h1>
  <p> Welcome to my personal website. Some of My avortie video goesm is <strong> College Football 26</strong>, to adventave games like <em> Read Dead Redemption 2.</em></p>
  <p>I usally do not have time to play video games lately but when I do it is College Football 26. It is my favorite games because I can play as the Kansas State Wildcats.</p>
  <p>But when I get bored of playing College Football 26 I play Read Dead Redemption 2. It is easily my favortie Rockstar game I can spend hours just roaming around the map.</p>
  <p>Those are some of the video games I like to play on my <strong> FREE TIME!</strong> Which is rarely during the semester. But it does make it more enjoyable when I do get to play</p>
  <p>
    Get to know more about me <a href+"about.html">about me</a> or you can take a look at my <a href="resume.html">resume</a>.
  </p>
  <div class="game-container">
        <h2>Tic Tac Toe</h2>
        <h3 id="status">Player X's Turn</h3>
        <div class="board" id="board">
            <div class="cell" data-index="0"></div>
            <div class="cell" data-index="1"></div>
            <div class="cell" data-index="2"></div>
            <div class="cell" data-index="3"></div>
            <div class="cell" data-index="4"></div>
            <div class="cell" data-index="5"></div>
            <div class="cell" data-index="6"></div>
            <div class="cell" data-index="7"></div>
            <div class="cell" data-index="8"></div>
        </div>
        <button id="restartButton">Restart Game</button>
    </div>
    <script>
        // This logic makes the game actually work
        const board = document.getElementById('board');
        const cells = document.querySelectorAll('.cell');
        const statusText = document.getElementById('status');
        const restartBtn = document.getElementById('restartButton');
        let currentPlayer = "X";
        let options = ["", "", "", "", "", "", "", "", ""];
        let running = true;
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        cells.forEach(cell => cell.addEventListener('click', cellClicked));
        restartBtn.addEventListener('click', restartGame);
        function cellClicked() {
            const cellIndex = this.getAttribute('data-index');
            if (options[cellIndex] != "" || !running) return;
            options[cellIndex] = currentPlayer;
            this.textContent = currentPlayer;
            checkWinner();
        }
        function checkWinner() {
            let roundWon = false;
            for (let i = 0; i < winConditions.length; i++) {
                const condition = winConditions[i];
                if (options[condition[0]] == options[condition[1]] && options[condition[1]] == options[condition[2]] && options[condition[0]] != "") {
                    roundWon = true;
                    break;
                }
            }
            if (roundWon) {
                statusText.textContent = `${currentPlayer} Wins!`;
                running = false;
            } else if (!options.includes("")) {
                statusText.textContent = `Draw!`;
                running = false;
            } else {
                currentPlayer = (currentPlayer == "X") ? "O" : "X";
                statusText.textContent = `${currentPlayer}'s Turn`;
            }
        }
        function restartGame() {
            currentPlayer = "X";
            options = ["", "", "", "", "", "", "", "", ""];
            statusText.textContent = `Player X's Turn`;
            cells.forEach(cell => cell.textContent = "");
            running = true;
        }
    </script>
</body>
</html>

 
    
