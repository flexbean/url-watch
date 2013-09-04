var should = require('should')
  , url    = require('../url-watch.js')
;



describe('watch nothing', function() {
    describe('should trigger localhost', function() {

        var flag = false;
        beforeEach(function(done){
            url.watch({
                every: 10
              , url: 'http://yahoo.com'
              , do: function(header) {
                    flag = true;
                    done(); // complete the async beforeEach
                }
            });

        });   

        it("flag should be true", function(){    
            flag.should.equal(true);  
        }); 

    });

});