define(['chai'], (chai) => {
    var assert = chai.assert;
    describe('Fist BDD', function(){

        var player = new Player();
        var song = new Song();
        
        it("should be able to play a Song", function() {
            player.play(song);
            assert.equal(true, true);
        });
    
    });

})