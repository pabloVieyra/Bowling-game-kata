class Frame {
  firstRoll: number | null = null;
  secondRoll: number | null = null;
  completed: boolean = false;
  bonusRolls: number = 0;
  bonus: number = 0;

  putRoll(pines: number) {
    if (this.firstRoll === null) {
      this.firstRoll = pines;
      if (pines === 10) {
        this.completed = true;
      }
    } else if (this.secondRoll === null) {
      this.secondRoll = pines;
      this.completed = true;
    }

    this.applyBonus(pines);
  }

  applyBonus(pines: number) {
    if (this.bonusRolls > 0) {
      this.bonus += pines;
      this.bonusRolls--;
    }
  }

  isStrike(): boolean {
    return this.isCompleted() && this.firstRoll === 10;
  }

  isSpare(): boolean {
    return (
      this.isCompleted() &&
      !this.isStrike() &&
      (this.firstRoll || 0) + (this.secondRoll || 0) === 10
    );
  }

  isCompleted(): boolean {
    return this.completed;
  }

  getScore(): number {
    return (this.firstRoll || 0) + (this.secondRoll || 0) + this.bonus;
  }

  setBonusRolls(bonusRolls: number) {
    this.bonusRolls = bonusRolls;
  }
}

export default Frame;
