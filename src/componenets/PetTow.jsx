import React,{usestate,useContext} from 'react'
import {CreateContext1} from '../App'

export default function PetTow(){
    const PetsContext = useContext(CreateContext1)

    return(
        <div>
            <h1>{PetsContext[1].type}</h1>
            <h1>{PetsContext[1].age}</h1>
            <h1>{PetsContext[1].amount}</h1>
        </div>
    )
}