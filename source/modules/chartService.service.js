angular.module( 'chartComponents' , [ 'chartComponents.gaussian' ] )
       .service( 'chartService' , function () {

              return {
                         chartService : gaussianChart
                     }

       })
