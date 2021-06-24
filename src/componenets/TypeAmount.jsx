import React,{useContext} from 'react'
import {CreateContext1} from '../App'

export default function PetsAmount(){
const PetsAm = useContext(CreateContext1)
    return(
        <div>
            {PetsAm.map((item)=>{return( <h1>{item.type} {item.amount} </h1> )})}
        </div>
    )
}