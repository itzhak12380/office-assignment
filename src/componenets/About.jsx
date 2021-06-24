import React,{useContext} from 'react'
import { CreateContext1 } from '../App'

export default function AboutME(){
    const PetsInfo = useContext(CreateContext1)

    return(
        <div>
            {PetsInfo.map((item)=>{return( <div> <h1>{item.type} </h1>,<img src={item.img} alt=""/> <a href={item.info}> link to vikipedia</a> </div> )})}
        </div>
    )
}