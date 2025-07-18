import { Game } from "./game";
import {GameStatuses} from "./game-statuses";

describe('Game', () => {
    it('should be created and return status SETTING', () => {
        const game = new Game();
        expect(game.status).toBe(GameStatuses.SETTINGS);
    });

    it('should be created and return status SETTING', async () => {
        const game = new Game();
        await game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS);
    });

    it('google_should_be_in_the_Grid_after_start', async () => {
        const game = new Game();
        expect(game.googlePosition).toBeNull()
        await game.start();

        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnCount);
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0);
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowCount);
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0);
    });
});