class Game {
    constructor() {
        this.tickIdentifier = null;
        this.messageEl = document.querySelector("#message");
    }

    init(settings, status, board, snake, menu, food) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
    }

    turnOnControls() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener("keydown", this.pressKeyHandler.bind(this));
    }

    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);  //?
        }
    }

    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier);
        }
    }

    doTick() {
        this.snake.performStep();
        if (this.isGameLost()) {
            return;
        }
        if (this.isGameWon()) {
            this.board.renderSnake();
            return;
        }
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        }
        this.board.clearBoard();
        this.food.setFood();
        this.board.renderSnake();
    }

    pressKeyHandler(event) {
        if (event.key === "ArrowUp") {
            this.snake.changeDirection("up");
        } else if (event.key === "ArrowDown") {
            this.snake.changeDirection("down");
        } else if (event.key === "ArrowLeft") {
            this.snake.changeDirection("left");
        } else if (event.key === "ArrowRight") {
            this.snake.changeDirection("right");
        }
    }

    isGameWon() {
        if (this.snake.body.length === this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            this.setMessage("Вы выиграли");
            return true;
        }
        return false;
    }

    isGameLost() {
        if (this.board.isNextStepToWall(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            this.setMessage("Вы проиграли");
            return true;
        }
        return false;
    }

    setMessage(text) {
        this.messageEl.textContent = text;
    }
}