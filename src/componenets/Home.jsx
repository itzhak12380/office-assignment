import React,{useContext} from 'react'
import { CreateContext1 } from '../App'

export default function Home(){
    const PetsTable = useContext(CreateContext1)
    return(
        <div>
                <table>
                    <tr>
                        <th>name</th>
                        <th> age</th>
                        <th> amount</th>
                    </tr>                   
                        {PetsTable.map((item)=>{return(<tr><td>{item.type}</td> <td>{item.age}</td><td>{item.amount}</td></tr>)})}                   
                </table>
        </div>
    )
}