"use strict";
class Player {
    constructor(tagName, id, experience) {
        this.tagName = tagName;
        this.id = id;
        this.experience = experience;
    }
    levelDown(levels) {
        this.experience = this.experience - levels;
    }
    getTagName() {
        return this.tagName;
    }
    getExperience() {
        return this.experience;
    }
}
let RenDiego = new Player("RenDiego", 1, 1000);
RenDiego.levelDown(1);
console.log(RenDiego.getExperience);
//# sourceMappingURL=Player.js.map