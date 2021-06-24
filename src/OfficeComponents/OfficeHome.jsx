import React from 'react'

const ImgArray = ["https://images.unsplash.com/photo-1468971050039-be99497410af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1621570277374-2e43db60c464?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
export default function OfficeHome(){

    return(
        <div style={{display:"flex" ,flexWrap:"wrap",justifyContent:"space-evenly"}}>
            <h1> ברוכים הבאים משתמשים פה זה מקום העבודה שלנו תעיינו ותהנו</h1>
            {ImgArray.map((item)=>{return (<img style={{width:"30%"}} src={item} alt="" />)})}
            
            
        </div>
    )
}