export const FILTER_SCALA= "FILTER_SCALA";


export function filterScale(flight, inputScala){
    return function (dispatch){
       // console.log('esta en el action')
       const fligthArr = flight.slice()
       
      if (inputScala === 'Directo'){
          inputScala = 1;
       }
       var escalFiltro = []

       for (let i = 0; i < fligthArr.length; i++) {
           //const element = array[i];
          let num = fligthArr[i].vueloIda.segments.length -1
          //console.log('cantidad',num)

          if (num === inputScala ) {
            escalFiltro.push(fligthArr[i])
          } 
       }

       dispatch({
         type: FILTER_SCALA,
         payload: escalFiltro
       })
    }
 }