describe( 'app configuration' , function ( ) {
      var $state, $controller, $rootScope, $location;


      beforeEach( module('d3') );
      beforeEach( module('chartComponents') )
      beforeEach( module('charts') )

      beforeEach( inject( function( _$rootScope_ , _chartService_ , _$controller_ , _$state_, _$location_ , _$templateCache_ ) {
        var $scope            = {};
        $controller           =   _$controller_
        $rootScope            =   _$rootScope_;
        chartService          =   _chartService_;
        $location             =   _$location_;
        $templateCache        =   _$templateCache_
        $controller('HomeCtrl', {$scope : $scope})
        $state                = _$state_;

        $templateCache.put('views/home/home.html', '<div></div>')
        $location.path('/blah')
        $rootScope.$digest()

      }))

      //temporary fix for chartComponents putting d3 in the window Object
      //and poluting my d3 module tests.
      afterEach(function () {
            delete window.d3;
      })



      it( 'should be able to change the state while leaving a d3 component intact on view' , function () {

            // expect($state.current.name).toEqual('home')

       })



})
