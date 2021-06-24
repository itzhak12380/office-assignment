import React,{usestate,useContext} from 'react'
import {CreateContext1} from '../App'

export default function PetFive(){
    const PetsContext = useContext(CreateContext1)

    return(
        <div>
            <h1>{PetsContext[4].type}</h1>
            <h1>{PetsContext[4].age}</h1>
            <h1>{PetsContext[4].amount}</h1>
        </div>
    )
}