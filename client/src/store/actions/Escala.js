export const ESCALA= "ESCALA";


export function searchEscala(flight){
    return function (dispatch){
       // console.log('esta en el action')
       const fligthArr = flight.slice()
       console.log('action',fligthArr )

       var escalFiltro = []

       for (let i = 0; i < fligthArr.length; i++) {
           //const element = array[i];
          let num = fligthArr[i].vueloIda.segments.length-1
          console.log('cantidad',num)
          //[0,1]
          if (num === 0) {
              escalFiltro.push('Directo')
          } else {
              escalFiltro.push(fligthArr[i].vueloIda.segments.length-1)
          }
       }

       //['directo', 1 , 3, 5, 8, 9 'directo']

       function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      var escalaUnico = escalFiltro.filter(onlyUnique);
      console.log('nuevo filtro escala', escalaUnico)
       dispatch({
         type: ESCALA,
         payload: escalaUnico
       })
    }
 }