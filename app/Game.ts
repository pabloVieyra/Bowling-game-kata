import Frame from "./Frame";

export default class Game {
  frames: Frame[] = [];

  constructor() {
    this.frames = [
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
      new Frame(),
    ];
  }

  actualFrame() {
    return this.frames.find((f) => !f.isCompleted());
  }

  roll(pines: number) {
    const frame = this.actualFrame();

    if (!frame) {
      throw new Error("Game finished");
    }

    frame.putRoll(pines);

    if (frame.isCompleted()) {
      const nextFrame = this.actualFrame();
      if (nextFrame)
        nextFrame.setBonusRolls(frame.isSpare() ? 1 : frame.isStrike() ? 2 : 0);
    }
  }

  score(): number {
    return this.frames
      .map((frame) => frame.getScore())
      .reduce((total, actual) => total + actual, 0);
  }
}
