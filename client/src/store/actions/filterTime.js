export const FILTER_TIME = "FILTER_TIME";


export function filterTime(flight, desde, hasta){
    return function (dispatch){
       // console.log('esta en el action')
       const fligthArr = flight.slice()

       var priceFiltro = []

       for (let i = 0; i < fligthArr.length; i++) {
           //const element = array[i];
          let num = fligthArr[i].vueloIda.departureTime
          var horaD = num.slice(0,2)
          var minutosD = num.slice(3,5)
          var enMinutosD = parseInt(horaD)*60 + parseInt(minutosD)
          //console.log('cantidad',num)

          if (enMinutosD >= desde & enMinutosD < hasta) {
              priceFiltro.push(fligthArr[i])
          } 
       }
       dispatch({
         type: FILTER_TIME,
         payload: priceFiltro
       })
    }
 }