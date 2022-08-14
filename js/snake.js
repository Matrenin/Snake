class Snake {
    constructor() {
        this.possibleDirections = ["down", "up", "left", "right"];
        this.body = [
            {
                x: 1,
                y: 3,
            },
            {
                x: 1,
                y: 2,
            },
            {
                x: 1,
                y: 1,
            },
        ];

        this.direction = "down";
    }

    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        if (this.direction === "down") {
            newHeadCoords.y++;
        } else if (this.direction === "up") {
            newHeadCoords.y--;
        } else if (this.direction === "left") {
            newHeadCoords.x--;
        } else if (this.direction === "right") {
            newHeadCoords.x++;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error(`Передано не верное направление. Вы передали: ${newDirection}`);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    isPassedOppositeDirection(newDirection) {
        if (this.direction === "down" && newDirection === "up") {
            return true;
        }
        if (this.direction === "up" && newDirection === "down") {
            return true;
        }
        if (this.direction === "right" && newDirection === "left") {
            return true;
        }
        if (this.direction === "left" && newDirection === "right") {
            return true;
        }
        return false;
    }

    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}

