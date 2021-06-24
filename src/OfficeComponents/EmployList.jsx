import React, { useContext, useState ,useEffect} from 'react'
import { CreateContext1 } from '../App';
import './list.css';
export default function EmployList() {
    const Time = new Date().getFullYear();
    const EmpolyInfo = useContext(CreateContext1)
    const [NewWorkes, setNewWorkes] = useState(EmpolyInfo)
    const [arrayNum,setArrayNum] = useState(NewWorkes.length)
 
    const [EmployePage, setEmployePage] = useState()
    const [AllWorkers, setAllWorkers] = useState({index:arrayNum , firstName: "", lastName: "", birthYear: "", phone: "", email: "" })
    function OnChange(e) {
        setAllWorkers({ ...AllWorkers, [e.target.name]: e.target.value})
    }
    function AddToArray() {
        setNewWorkes([...NewWorkes, AllWorkers])
        setAllWorkers((item)=>{return item.index = NewWorkes.length})
    }
    // function EmployPrivetDetails(e) {
    //     NewWorkes.map((item)=>{
    //         if(e.target.key = item.index){
    //         setNewWorkes((item)=>{return( <div> <h1>{item.firstName + item.lastName }</h1> </div>)})
    //     }

    //     })
        
    // }
    return (
        <div>
            <label htmlFor="" > first name <input name='firstName' onChange={OnChange} type="text" /></label>
            <label htmlFor=""> last name <input name='lastName' onChange={OnChange} type="text" /></label>
            <label htmlFor=""> birth year  <input name='birthYear' onChange={OnChange} type="text" /></label>
            <label htmlFor=""> phone number  <input name='phone' onChange={OnChange} type="text" /></label>
            <label htmlFor=""> email <input type="text" name="email" onChange={OnChange} /> </label>
            <button style={{backgroundColor:"burlywood"}}  onClick={AddToArray}>add to table</button>
            <table id="emlpyeTable">
                <tr>
                    <th> full name</th>
                    <th> age</th>
                    
                </tr>
                {
                    NewWorkes.map((item) => {
                        return (
                            <tr  className="HoverMe" key={item.index} >
                                <td >{item.firstName} {item.lastName}</td>
                                <td >{Time - item.birthYear}</td>
                                <p className="magic">{item.phone}</p>
                                <p className="magic">{item.email}</p>
                            </tr>
                             
                        )
                    })
                }
                <tr className="HoverMe">
                    <td >{NewWorkes.firstName} {NewWorkes.lastName}</td>
                    <td >{NewWorkes.birthYear}</td>
                    <p className="magic">{NewWorkes.phone - Time}</p>
                    <p className="magic">{NewWorkes.email}</p>
                </tr>

            </table>            
        </div>
    )
}