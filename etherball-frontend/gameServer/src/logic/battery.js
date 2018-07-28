function Battery(endurance, overall) {
  this.energy = endurance;
  this.endurance = endurance;
  this.time = 0;
  this.overall = overall;

  this.productivity = () => {
    return this.energy * this.overall;
  };

  this.addTime = (time, playing) => {
    if (playing) {
      this.time += time;
      this.energy -= time;
    } else {
      this.energy += time;
      if (this.energy > this.endurance) {
        this.energy = this.endurance;
      }
    }
  };
}

module.exports = Battery;
