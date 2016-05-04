'use strict'
describe( 'd3 module/service' , function() {

      var d3Service;

      beforeEach( module('d3') );

      it('should load d3 only when instantiated' , function()


        expect( () => d3 ).toThrow(new ReferenceError('d3 is not defined'));
        inject( function (_d3Service_) {
              d3Service = _d3Service_;
        });
        expect(d3).not.toEqual(null);

      })
})
