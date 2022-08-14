class Menu {
    constructor() {
        this.startBtnEl = document.querySelector("#startBtn");
        this.pauseBtnEl = document.querySelector("#pauseBtn");
    }

    addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler) {
        this.startBtnEl.addEventListener("click", startBtnClickHandler);
        this.pauseBtnEl.addEventListener("click", pauseBtnClickHandler);
    }
}

