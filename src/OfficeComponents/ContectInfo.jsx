import React from 'react';
import emailjs from 'emailjs-com';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


  
export default function ContactInfo(){
  
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_fvaamkt', 'template_mmipph9', e.target,'user_POZT5c2NNdcxQ2wGJWNmF')
          .then((result) => {
              console.log("you did it");
          }, (error) => {
              console.log(error.text);
          }

          );e.target.reset()};
    return(
        <div>
            <form  onSubmit={sendEmail} error="true" action="" style={{display:'flex',flexWrap:"wrap",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
            <label  htmlFor=""> full name <input placeholder="itzhak kasie" error="flase" name="name" style={{width:"350px"}} type="text" /></label>
            <label htmlFor=""> subjct <input placeholder="work" name="subjct" style={{width:"350px"}} type="text" /></label>
            <label htmlFor="">email address<input placeholder="example123@gmail.com" name="email" style={{width:"350px"}} type="email" /></label>
            <label htmlFor=""> message <textarea placeholder="please enclode your email address in the message " name="message" id="" cols="30" rows="10"></textarea></label>
            <button type="submit">send to email</button>
            
            </form>
            
        </div>
    )
    
}










