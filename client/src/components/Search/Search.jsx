//import NavBar from "../NavBar/NavBar";
//import Recipes from "../Recipes";
//import {useEffect, useState} from 'react'
//import {useDispatch, useSelector} from 'react-redux'
//import {getRecipe} from '../../actions/recipeActions'

import Filter from "../Filter/Filter";
import FlightCard from "../FlightCard/FlightCard";

export default function Search() {
    return (
        <div>
            <Filter />
            <FlightCard />

        </div>
    )
}
