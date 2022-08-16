class Settings {
    init(params) {
        let defaultParams = {rowsCount: 21, colsCount: 21, speed: 2, winLength: 50};
        Object.assign(defaultParams, params);
        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error("Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].");
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 20) {
            throw new Error('Неверные настройки, значение speed должно быть в диапазоне [1, 20].');
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
            throw new Error('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
        }
        this.winLength = defaultParams.winLength;
    }

    selectSpeed() {
        let speedValue = document.querySelector("#speed").value;
        speedValue = +speedValue;
        return speedValue;
    }

    selectWinLength() {
        let winLengthValue = document.querySelector("#winLength").value;
        winLengthValue = +winLengthValue;
        return winLengthValue;
    }
}