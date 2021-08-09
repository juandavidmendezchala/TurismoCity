export const FILTER_AERO_N= "FILTER_AERO_N";


export function filterAeroFligths(flight){
    return function (dispatch){
       // console.log('esta en el action')
       const fligthArr = flight.slice()
       console.log('action',fligthArr )
       //ler  f = fligthArr.map(m => m.airlineIda.name)
       /*let sinRepetidos = flight.filter((valorActual, indiceActual, arreglo) => {
        //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
       });

       console.log('action', sinRepetidos)*/
       var aerolineasNombre = fligthArr.map(a => a.airlineIda.name)
       console.log('aeroNombre',aerolineasNombre)
       function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      var aeroUnico = aerolineasNombre.filter(onlyUnique);
      console.log('unico', aeroUnico)
       dispatch({
         type: FILTER_AERO_N,
         payload: aeroUnico
       })
    }
 }