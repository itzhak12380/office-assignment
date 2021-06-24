import React,{usestate,useContext} from 'react'
import {CreateContext1} from '../App'
import PetsAmount from './TypeAmount'

export default function PetONE(){
    const PetsContext = useContext(CreateContext1)

    return(
        <div>
            <h1>{PetsContext[0].type}</h1>
            <h1>{PetsContext[0].age}</h1>
            <h1>{PetsContext[0].amount}</h1>
            <PetsAmount/>
        </div>
    )
}