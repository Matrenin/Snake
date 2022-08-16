window.addEventListener("load", () => {
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();
    const food = new Food();
    const game = new Game();
    const menu = new Menu();

    settings.init({speed: 5, winLength: 7});
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food);

    board.renderBoard();
    board.renderSnake();
    food.setNewFood();
    game.turnOnControls();
});

document.querySelector(".play").addEventListener("click", () => {
    window.location.reload();
});