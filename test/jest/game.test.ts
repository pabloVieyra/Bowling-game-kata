import Game from "../../app/Game";

describe("Name of the group", () => {
  const bowling = new Game();

  it("Caso 1: Suma un frame sin bonus", () => {
    const game = new Game();
    game.roll(2);
    game.roll(7);

    expect(game.score()).toEqual(9);

    game.roll(2);
    game.roll(7);

    expect(game.score()).toEqual(18);
  });

  it("Caso 2: Spare", () => {
    const game = new Game();
    game.roll(1);
    game.roll(9); // Spare
    game.roll(1); // tiro con bonus = 2
    game.roll(5);

    expect(game.score()).toEqual(17);
  });

  it("Caso 3: Strike", () => {
    const game = new Game();
    game.roll(10); // Strike
    game.roll(1); // 2
    game.roll(1); // 2
    expect(game.score()).toEqual(14);
  });
});
