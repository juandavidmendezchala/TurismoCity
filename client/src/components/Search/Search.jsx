//import NavBar from "../NavBar/NavBar";
//import Recipes from "../Recipes";
//import {useEffect, useState} from 'react'
//import {useDispatch, useSelector} from 'react-redux'
//import {getRecipe} from '../../actions/recipeActions'

import Filter from "../Filter/Filter";
import FiltroMenu from "../filtroMenu/FiltroMenu";
//import filtroMenu from "../filtroMenu/filtroMenu";

import FlightCard from "../FlightCard/FlightCard";

export default function Search(props) {

  const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  const way = params.get('way');
  const fromPlace = params.get('fromPlace');
  const toPlace = params.get('toPlace');
  const fromDate = params.get('fromDate');
  const toDate = params.get('toDate');
  const classFlight = params.get('classFlight');
  const adults = params.get('adults');
  const kids = params.get('kids');
  const babies = params.get('babies');
  const currency = params.get('currency')

  return (
    <div className='orderFilterCard'>
      <div><FiltroMenu /></div>   
      
      
      <div><FlightCard 
        way={way} fromPlace={fromPlace} toPlace={toPlace} fromDate={fromDate} toDate={toDate} classFlight={classFlight}
        adults={adults} kids={kids} babies={babies} currency={currency} 
      /></div>

    </div>
  )
}