import seedrandom from 'seedrandom';

export default {
    rng: seedrandom(),
    randomItem: function(collection) {
        var i = Math.floor(this.rng() * collection.length);
        return collection[i];
    }
};