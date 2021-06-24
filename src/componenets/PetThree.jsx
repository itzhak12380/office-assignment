import React,{usestate,useContext} from 'react'
import {CreateContext1} from '../App'

export default function PetThree(){
    const PetsContext = useContext(CreateContext1)

    return(
        <div>
            <h1>{PetsContext[2].type}</h1>
            <h1>{PetsContext[2].age}</h1>
            <h1>{PetsContext[2].amount}</h1>
        </div>
    )
}