import {GameStatuses} from "./game-statuses";

export class Game {
    #status = GameStatuses.SETTINGS
    #googlePosition = null

    #settings={
        gridSize: {
            columnCount: 4,
            rowCount: 4
        },
        googleJumpInterval: 4000
    }

    start() {
        {
            if (this.#status !== GameStatuses.SETTINGS) {
                throw new Error('Game must be Settings before Start')
            }
            this.#status = GameStatuses.IN_PROGRESS
            this.#googlePosition = {x: 0, y: 0 }
        }
    }

    get status() {
        return this.#status;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    get gridSize() {
        return this.#settings.gridSize;
    }
}