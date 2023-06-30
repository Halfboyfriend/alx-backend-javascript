/*eslint-disable */
class Building {
    constructor (sqft){
        if (this.constructor !== Building && typeof(this.evacuationWarningMessage) !== 'function') {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        this._sqft = sqft;
    }

    get sqft () {
        return this._sqft;
    }

}

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}