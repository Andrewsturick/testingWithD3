angular.module( 'chartComponents' , [ 'chartComponents.gaussianStockProbabilities' ] )
.service( 'chartService' , function (gaussianStockProbabilities) {
  return {
    chartService :  {
      gaussianChart :  {
        title  : 'probability curve from a stock option chain',
        chart  :  gaussianStockProbabilities
      }
    }
  }})
