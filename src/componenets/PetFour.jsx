import React,{usestate,useContext} from 'react'
import {CreateContext1} from '../App'

export default function PetFour(){
    const PetsContext = useContext(CreateContext1)

    return(
        <div>
            <h1>{PetsContext[3].type}</h1>
            <h1>{PetsContext[3].age}</h1>
            <h1>{PetsContext[3].amount}</h1>
        </div>
    )
}
